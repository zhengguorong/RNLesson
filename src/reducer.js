import { handleActions } from 'redux-actions'

export const initialState = {
  banners: [],
  products: [],
}

export default handleActions({
  'mall/banners/save'(state, { payload }) {
    return { ...state, banners: payload }
  },
  'mall/products/save'(state, { payload }) {
    return { ...state, products: payload }
  },
}, initialState)