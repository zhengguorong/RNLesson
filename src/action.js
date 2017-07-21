import * as api from './service/api'

export const getBannerList = () => {
  return dispatch => {
    api.getBannerList().then(res => {
      dispatch({ type: 'mall/banners/save', payload: res.bannerList })
    })
  }
}

export const getRecommendItem = () => {
  return dispatch => {
    api.getRecommendItem().then(res => {
      dispatch({ type: 'mall/products/save', payload: res.recommendManage })
    })
  }
}