import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import { facebookSignInInitiate, loginInitiate } from '../redux/action'
import "./Login.css"
import { googleSignInInitiate } from './../redux/action';
const Login = () => {
  const [state,setState] = useState({email:'', password:''});
  const {email,password} =state;
  const dispatch = useDispatch();
  const history = useNavigate();
  const {currentUser} = useSelector((state)=>state.user);
  useEffect(()=>{
    if(currentUser){
      history('/')
    }
  },[currentUser,history])
  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate())
  };
  const handleFacebookSignIn = () => {
    dispatch(facebookSignInInitiate())
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email && !password){
      return;
    }
    dispatch(loginInitiate(email,password))
    setState({email:"",password:""})
  };
  const handleChange = (e) => {
    let {name,value} = e.target;
    setState({...state,[name]:value})
  }
  return (
    <div id="logreg-forms">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}>
          Sign in
        </h1>
        <div className="social-login">
          <button className="btn google-btn social-btn" type="button" onClick={handleGoogleSignIn}>
            <span>
              <i className="fab fa-google-plus-g"></i> Sign In with Google
            </span>
          </button>
          <button className="btn facebook-btn social-btn" type="button" onClick={handleFacebookSignIn}>
            <span>
              <i className="fab fa-facebook-f"></i> Sign In with Facebook
            </span>
          </button>
        </div>
        <p style={{textAlign: 'center'}}>OR</p>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email Address" name="email" value={email} onChange={handleChange}/>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" value={password} onChange={handleChange}/>
        <button type="submit" className="btn btn-primary btn-block"><i className="fas fa-sign-in-alt"></i> Sign In</button>
        <hr/>
        <p>Don't have an account </p>
        <Link to="/register">
        <button type="button" className="btn btn-primary btn-block" id="btn-signup">
          <i className="fas fa-user-plus"></i>Sign Up new account
        </button>
        </Link>
      </form>
    </div>
  )
}

export default Login