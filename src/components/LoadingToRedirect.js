import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingToRedirect = () => {
  const [count,setCount] = useState(5);
  const history = useNavigate()
  useEffect(() => {
    const interval = setInterval(() =>{
      setCount((count)=>--count);
    },1000)
    count==0 && history('/login')
    return () => {clearInterval(interval);}
  },[count,history])
  return (
    <div> Redirecting you in {count} seconds</div>
  )
}

export default LoadingToRedirect