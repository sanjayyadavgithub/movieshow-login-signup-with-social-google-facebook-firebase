import React from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'

const UserRoute = ({children,...rest}) => {
  const {currentUser} = useSelector((state)=>state.user);
  console.log("curre",currentUser);
  return <div>
     {currentUser ? <Route {...rest} /> :<LoadingToRedirect/>}
  </div>
}

export default UserRoute