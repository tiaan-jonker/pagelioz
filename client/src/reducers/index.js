import { combineReducers } from "redux";

import userLoginReducer from './userReducers/userLoginReducers'

export default combineReducers({
  userLogin: userLoginReducer
})