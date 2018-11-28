const express = require('express')
const bodyParser = require('body-parser')
const solc = require('solc')

const lowVersion = require('../static/soljson-v0.4.25+commit.59dbf8f1.js')

const app = express()
app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.all('*', (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  next()
})

app.get('/', (_, res) => {
  res.send('hello world')
})

app.post('/compile', (req, res) => {
  console.log('\n-----------compile require-----------')
  const data = req.body
  for (const key in data) {
    console.log(`${key}: ${data[key]}`)
  }
  console.log()
  if (data.source === undefined) {
    console.warn('No source code input')
    return res.json({
      error: true,
      from: '[POST /compile]',
      msg: 'No source code input'
    })
  }
  const matched = data.source.match(/pragma[\s]+solidity[\s]+\^?0\.([\d]+)\.[\d]+/)
  if (!matched || !matched[1]) {
    console.warn('Unknow solidity version')
    return res.json({
      error: true,
      from: '[POST /compile]',
      msg: 'Unknow solidity version'
    })
  }
  const input = {
    'language': 'Solidity',
    'settings': {
      'outputSelection': {
        '*': {
          '*': [ 'evm.bytecode.object', 'abi' ]
        }
      }
    },
    'sources': {
      'main.sol': {
        'content': data.source
      }
    }
  }
  let output = null
  if (matched[1] < 5) {
    const useSolc = solc.setupMethods(lowVersion)
    output = JSON.parse(useSolc.lowlevel.compileStandard(JSON.stringify(input)))
  } else {
    output = JSON.parse(solc.compileStandardWrapper(JSON.stringify(input)))
  }
  if (output.errors) {
    console.warn('Compile error\n')
    for (let i = 0; i < output.errors.length; i++) {
      const err = output.errors[i]
      console.warn(err)
    }
    return res.json({
      error: true,
      from: '[POST /compile]',
      msg: 'Compile error',
      details: output.errors
    })
  }
  const main = output.contracts['main.sol']
  for (var contractName in main) {
    console.log(`Contract ${contractName}: ${main[contractName].evm.bytecode.object}`)
  }
  return res.json(output)
})

console.log('server listen on port 3000')
app.listen(3000)
