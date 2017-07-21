lesson4:页面导航，实现商城首页跳转到商城详情页

官方推荐react-navigation用作导航。参考文档https://reactnavigation.org/docs/intro/
第一步：项目安装react-navigation

第二步：创建router.js用于整个应用的导航

第三步：修改index.ios.js或index.android.js，修改其注册入口为router

第四步：从列表跳转到详情页
获取导航对象：const { navigation } = this.props
调用navigation.navigate('productDetail')跳转详情页


高级应用：
tabNavgation和stackNavgation嵌套使用
