import { combineReducers } from 'redux'

import userLoginReducer from './userReducers/userLoginReducers'
import userSignUpReducer from './userReducers/userSignUpReducers'

export default combineReducers({
  userLogin: userLoginReducer,
  userSignUp: userSignUpReducer,
})
