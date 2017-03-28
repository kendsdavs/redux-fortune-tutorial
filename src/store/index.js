import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import rootReducer from './root-reducer'
import actionCreators from './action-creators'
import thunk from 'redux-thunk'
import { identity } from 'ramda'

const store = createStore(rootReducer, applyMiddleware(thunk))

const connector = connect(identity, actionCreators)

export { store, connector }
