import { SET_FORTUNE, UPDATE } from './type'
import { merge } from 'ramda'

export default function (state, action) {
  switch (action.type) {
    case UPDATE:
      return merge(state, action.payload)
    case SET_FORTUNE:
      return merge(state, {fortune: action.payload})
    default:
      return state
  }
}
