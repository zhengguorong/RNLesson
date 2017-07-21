lesson5: 使用redux管理数据

安装依赖：
		"react-redux": "^5.0.5",
		"redux": "^3.7.1",
		"redux-actions": "^2.0.3",
    "redux-thunk": "^2.2.0"

集成：
第一步：创建store.js（用于配置中间件等信息）,reducer.js,action.js
第二步：在store.js文件配置相关信息
第三步：在index.ios.js或者index.android.js配置入口

书写逻辑代码
第一步：在reducer.js编写接受的类型和存储位置
第二步：在action.js编写业务逻辑，目前只是简单的把网络请求从UI层转移到action
第三步：页面通过connect连接数据和action。