import { SET_FORTUNE, UPDATE } from './type'
import fetch from 'isomorphic-fetch'
const url = process.env.REACT_APP_URL

const actionCreators = function (dispatch) {
  const dispatchFortune = fortune =>
    dispatch({type: SET_FORTUNE, payload: fortune.text})
  return {
    predict: function (age, initial, color) {
      console.log(age, initial, color)
      return fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return res
      })
      .then(dispatchFortune)
    },
    update: (key, value) => {
      dispatch({type: UPDATE, payload: {[key]: value}})
    }
  }
}

export default actionCreators
