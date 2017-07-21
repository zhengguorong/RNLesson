import request from './request'

// 获取商城首页banner
export const getBannerList = (pageType = 'WASHMALL') => {
  return request.post('/washMall/app/getBannerList', {pageType: pageType})
}

// 获取商城首页推荐商品
export const getRecommendItem = () => {
  return request.post('/washMall/item/getRecommendItem')
}