lesson3:网路请求

打开productDetail.js
因为现在数据是直接写死的，我们通过fetch方法，获取网络数据

第一步：在组件初始化完毕后执行网络请求
组件初始化生命周期为：componentDidMount
调用fetch方法，在body设置请求参数，因为body只接受string,我们用JOSN.stringify方法转换json字符串
因为fetch返回的是promise对象，我们通过then去做后续的逻辑操作
** 如果程序需要调试，可以用console.log()打印信息，按模拟器按ctrl+D调用面板，打开remote js debug

第二步：把数据渲染到界面
可以通过this.setState()方法设置数据
因为网络请求为异步请求，开始的时候productDetail对象为undefined，会导致页面渲染失败
所以我们在构造函数初始化productDetail对象
  constructor () {
    super()
    this.state = {
      productDetail: {}
    }
  }

*****************************高级应用****************************************************

由于网络层在程序中比较常用，如果在每个组件实现网络请求，网络层不能得到复用，也不好统一控制

因此，我们做一个网络层的封装，实现商城首页的网络请求
第一步：在src创建service目录，创建request.js，该文件实现网络参数的封装，例如请求类型，请求主域名，请求加密参数之类

第二步：在service目录创建api.js，用于封装业务请求，提供UI层调用

第三步：在UI层调用api.js，获取数据
  componentDidMount() {
    api.getBannerList()
    api.getRecommendItem()
  }

第四步：渲染数据到界面