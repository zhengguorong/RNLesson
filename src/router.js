import mall from './mall'
import productDetail from './productDetail'
import { StackNavigator,TabNavigator } from 'react-navigation'

// 创建栈路由，并设置两个页面mall和productDetail
const stackRouter = StackNavigator({
  mall: { screen: mall },
  productDetail: { screen: productDetail },
})

// tab路由
const tabRouter = TabNavigator({
  tab1: {screen: mall},
  tab2: {screen: productDetail}
})

// 混合使用
const router = StackNavigator({
  mall: { screen: mall },
  productDetail: { screen: productDetail },
  home: { screen: tabRouter}
},{
  initialRouteName: 'home' // 设置默认路由
})

// 试一下下面三个不同导航的区别吧
// export default stackRouter
// export default tabRouter
export default router
