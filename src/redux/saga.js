import {call,put,takeEvery } from 'redux-saga/effects'
import * as types from './actionType';
import {getDataFail,getDataSuccess} from './action'


function * getData(action){
  try{
    const key="790c2a32";
    let str = action.payload.search || "raja"
    let api = `http://www.omdbapi.com/?t=${str}&apikey=${key}`
    const data = yield fetch(api)
    const val = yield data.json()
    yield put(getDataSuccess(val))
  }catch(e){
    console.log(e)
    yield put(getDataFail(e.message))
  }
}

export default function * mySaga(){
  yield takeEvery(types.GET_DATA_START,getData)
}