import * as config from '../config'
import md5 from 'md5'
import { AsyncStorage } from 'react-native'

const API_BASE_URL = 'http://mallapi.bluemoon.com.cn'

const post = async (uri, body = {}) => {
  const token = await AsyncStorage.getItem('token');
  body['token'] = token
  let params = JSON.stringify(body)
  return fetch(API_BASE_URL + uri + getBaseParam(params), {
    body: params,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }).then((response => {
    return response.json()
  })).then(res => {
    console.log({request: {url: API_BASE_URL + uri, params: body}, response: res}, 'network')
    return res
  })
}

const getBaseParam = (rowStr = '') => {
  let client = config.APP_PROP_CLIENT
  let cuid = config.APP_PROP_CUID
  let format = config.APP_PROP_FORMAT
  let time = new Date().getTime()
  let version = config.APP_PROP_VERSION
  let secret = config.APP_PROP_SECRET
  let sign = md5(secret + client + cuid + format + time + version + rowStr + secret)
  return `?client=${client}&cuid=${cuid}&format=${format}&time=${time}&version=${version}&sign=${sign}`
}

export default request = {
  post
}