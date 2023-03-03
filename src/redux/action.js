import * as types from './actionType'
import {auth,googleprovider,facebookprovider} from '../firebase'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,signInWithPopup } from "firebase/auth";

const registerStart = () =>({
  type: types.REGISTER_START
})

const registerSuccess = (user) =>({
  type: types.REGISTER_SUCCESS,
  payload: user
})


const registerFail = (error) =>({
  type: types.REGISTER_FAIL,
  payload: error
})

const loginStart = () =>({
  type: types.LOGIN_START
})

const loginSuccess = (user) =>({
  type: types.LOGIN_SUCCESS,
  payload: user
})


const loginFail = (error) =>({
  type: types.LOGIN_FAIL,
  payload: error
})

const logoutStart = () =>({
  type: types.LOGOUT_START
})

const logoutSuccess = () =>({
  type: types.LOGOUT_SUCCESS,
})


const logoutFail = (error) =>({
  type: types.LOGOUT_FAIL,
  payload: error
})


const googleSignInStart = () =>({
  type: types.GOOGLE_SIGN_IN_START
})

const googleSignInSuccess = () =>({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
})


const googleSignInFail = (error) =>({
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error
})

const facebookSignInStart = () =>({
  type: types.FACEBOOK_SIGN_IN_START
})

const facebookSignInSuccess = () =>({
  type: types.FACEBOOK_SIGN_IN_SUCCESS,
})


const facebookSignInFail = (error) =>({
  type: types.FACEBOOK_SIGN_IN_FAIL,
  payload: error
})


export const getDataStart = (data) =>({
  type: types.GET_DATA_START,
  payload: data
})

export const getDataSuccess = (data) =>{
  return {
    type: types.GET_DATA_SUCCESS,
    payload:data
  }
}

export const getDataFail = (error) =>({
  type: types.GET_DATA_FAIL,
  payload: error
})



export const setUser = (user) =>({
   type: types.SET_USER,
   payload: user
})

export const registerInitiate = (email, password,displayName) =>{
   return function(dispatch) {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
          dispatch(registerSuccess(res.user));
        })
      .catch(error => {
        dispatch(registerFail(error.message))
      })
   }
}

export const loginInitiate = (email, password) =>{
  return function(dispatch) {
   dispatch(loginStart());
   signInWithEmailAndPassword(auth, email, password)
   .then((res) => {
       dispatch(loginSuccess(res.user));
     })
   .catch(error => {
     dispatch(loginFail(error.message));
   })
  }
}

export const logoutInitiate = () =>{
  return function(dispatch) {
   dispatch(logoutStart());
   signOut(auth).then((response)=>{
     dispatch(logoutSuccess());
   }).catch((error) =>{
     dispatch(logoutFail(error.message));
   })
  }
}

export const googleSignInInitiate = () =>{
  return function(dispatch) {
   dispatch(googleSignInStart());
   signInWithPopup(auth,googleprovider)
   .then((res) => {
       dispatch(googleSignInSuccess(res.user));
     })
   .catch(error => {
     dispatch(googleSignInFail(error.message));
   })
  }
}

export const facebookSignInInitiate = () =>{
  return function(dispatch) {
   dispatch(facebookSignInStart());
   signInWithPopup(auth,facebookprovider.addScope("user_birthday,email"))
   .then((res) => {
       dispatch(facebookSignInSuccess(res.user));
     })
   .catch(error => {
     dispatch(facebookSignInFail(error.message));
   })
  }
}

