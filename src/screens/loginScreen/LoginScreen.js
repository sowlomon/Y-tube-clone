import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import "./_loginScreen.scss"
import {login} from "../../redux/actions/auth.action"
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


const LoginScreen = () => {

  const dispatch = useDispatch()

  const accessToken = useSelector(state => state.auth.accessToken)

  const handleLogin = () => {
    dispatch(login())
  }

  const history = useHistory()

  useEffect(() =>{
    if(accessToken){
      history.push('/')
    }

  },[accessToken, history])

  return (
    <div className="login">
      <div className="login_container">
        <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt=""/>
        <button onClick={handleLogin}>Login With Google</button>
        <p>created using YOUTUBE DATA API</p>
      </div>
    </div>
  )
}

export default LoginScreen
