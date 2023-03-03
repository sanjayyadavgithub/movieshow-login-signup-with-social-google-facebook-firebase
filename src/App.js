import React ,{useEffect,Fragment}from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserRoute from "./components/UserRoute";
import LoadingToRedirect from "./components/LoadingToRedirect";
import { useDispatch,useSelector} from "react-redux";
import {auth} from "./firebase"
import {setUser} from "./redux/action"
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const {currentUser} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if(user){
        dispatch(setUser(user))
      }else{
        dispatch(setUser(null))
      }
    })
  },[dispatch]);
  return (
    <Router>
      <Fragment>
        <Routes>
           <Route exact path='/' element={currentUser ? <Home/> : <LoadingToRedirect/>}/>
           <Route exact path="/login" element={<Login/>}></Route>
           <Route exact path="/register" element={<Register/>}></Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
