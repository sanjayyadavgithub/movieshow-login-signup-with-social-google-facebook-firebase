import * as types from './actionType'
const initalState = {
  loading:false,
  currentUser:null,
  error:null,
  data:null
};

const userReducer = (state=initalState, action) =>{
  switch(action.type){
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
    case types.GOOGLE_SIGN_IN_START:
    case types.FACEBOOK_SIGN_IN_START:
       return{
        ...state,
        loading:true,
       }
    case types.LOGOUT_SUCCESS:
      return{
        ...state,
        currentUser:null
      }
    case types.SET_USER:
      return{
        ...state,
        loading:false,
        currentUser:action.payload
      }
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.GOOGLE_SIGN_IN_SUCCESS:
    case types.FACEBOOK_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading:false,
        currentUser:action.payload
      }
    case types.REGISTER_FAIL :
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
    case types.GOOGLE_SIGN_IN_FAIL:
    case types.FACEBOOK_SIGN_IN_FAIL:
    case types.GET_DATA_FAIL:
      return {
        ...state,
        loading:false,
        error:action.payload
      }
    case types.GET_DATA_START:
      return {
        ...state,
        loading:true,
      }
    case types.GET_DATA_SUCCESS:
      return{
        ...state,
        loading:false,
        data:action.payload
      }
    default:
      return state
  }
}

export default userReducer;