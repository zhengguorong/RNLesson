import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import mallReducer from './reducer'

const middleware = applyMiddleware(thunk)

export default (data = {}) => {
  const rootReducer = combineReducers({
    //every modules reducer should be define here
    mallReducer
  })

  return createStore(rootReducer, data, middleware)
}