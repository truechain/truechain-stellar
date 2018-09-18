# Stellar

> TrueChain Dashboard

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Compile Server

``` bash
# Start a simple solidity compilation service on port 3000
node server/index.js
```

```
├── server                          =>  编译合约服务
├── src                             =>
│   ├── App.vue                     =>  入口文件
│   ├── api-config                  =>
│   │   └── index.js                =>
│   ├── components                  =>
│   │   ├── Chain.vue               =>
│   │   ├── Deploy.vue              =>  部署
│   │   ├── Hello.vue               =>  你好
│   │   ├── Interact.vue            =>
│   │   ├── Log.vue                 =>  日志
│   │   ├── Transfer.vue            =>  交易
│   │   └── common                  =>  通用
│   ├── language                    =>  全球化配置
│   ├── main.js                     =>  入口文件
│   ├── router                      =>  路由配置
│   ├── store                       =>  vuex
│   └── style.styl                  =>  样式初始化
└── static                          =>
    ├── ERC20.sol                   =>
    ├── contracts.json              =>
    ├── network.json                =>
    └── simple.sol                  =>
```
