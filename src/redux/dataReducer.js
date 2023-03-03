// import * as types from "./actionType"
// const initialState = {
//   loading: false,
//   data: null,
//   error: null,
// }

// const dataReducer = (state=initialState, action) =>{
//    switch(action.type){
//     case types.GET_DATA_START:
//       return {
//         ...state,
//         loading: true,
//       }
//     case types.GET_DATA_SUCCESS:
//       console.log("data redu",action)
//       return {
//         ...state,
//         loading: false,
//         data: action.payload
//       }
//     case types.GET_DATA_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error:action.payload
//       }
//     default:
//       return state
//    }
// }


// export default dataReducer