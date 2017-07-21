/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry
} from 'react-native'
import React from 'react'
import Router from './src/router'
// redux相关
import createStore from './src/store'
import { Provider } from 'react-redux'

const store = createStore()

const Main = () => {
  // 注意这里Router必须大写，不然会报错
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}

AppRegistry.registerComponent('RNLesson', () => Main)
