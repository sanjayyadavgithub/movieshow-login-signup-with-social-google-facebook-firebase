import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import "./Register.css"
import { registerInitiate } from './../redux/action';
const Register = () => {
  const [state,setState] = useState({displayName : '', email:'', password:'', passwordConfirm:'',});
  const {displayName,email,password,passwordConfirm} =state;
  const history = useNavigate();
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state)=>state.user);
  useEffect(()=>{
    if(currentUser){
       history('/')
    }
  },[currentUser,history])
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== passwordConfirm){
      return;
    }
    dispatch(registerInitiate(email,password,displayName))
    setState({email:"",password:"",displayName:"",passwordConfirm:""})
  };
  const handleChange = (e) => {
    let {name,value} = e.target;
    setState({...state,[name]:value})
  }
  return (
    <div id="register-form">
      <form className="form-signup" onSubmit={(e)=>handleSubmit(e)}>
        <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}>
          Sign Up
        </h1>
        <input type="text" id="displayName" className="form-control" placeholder="Full Name" name="displayName" value={displayName} onChange={handleChange}/>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email Address" name="email" value={email} onChange={handleChange}/>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" value={password} onChange={handleChange}/>
        <input type="password" id="inputPasswordConfirm" className="form-control" placeholder="Confirm Password" name="passwordConfirm" value={passwordConfirm} onChange={handleChange}/>
        <button type="submit" className="btn btn-primary btn-block"><i className="fas fa-user-plus"></i> Sign Up</button>
        <hr/>
        <Link to="/login">
          <i className="fas fa-angle-left"></i> Back
        </Link>
      </form>
    </div>
  )
}

export default Register