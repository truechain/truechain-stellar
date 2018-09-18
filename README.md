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
├── server                          =>  合约编译服务
├── src
│   ├── App.vue                     =>  入口组件
│   ├── api-config
│   │   └── index.js                =>  合约编译服务配置
│   ├── components
│   │   ├── Deploy.vue              =>  合约部署页面
│   │   ├── Hello.vue               =>  欢迎页面
│   │   ├── Interact.vue            =>  合约调用页面
│   │   ├── Log.vue                 =>  交易日志页面
│   │   ├── Transfer.vue            =>  转账页面
│   │   └── common                  =>  通用组件
│   ├── language                    =>  全球化配置
│   ├── main.js                     =>  入口文件
│   ├── router                      =>  路由配置
│   ├── store                       =>  vuex
│   └── style.styl                  =>  样式初始化
└── static
    ├── contracts.json              =>  默认合约配置
    └── network.json                =>  默认网络配置
```
