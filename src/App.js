import React, { useState } from "react"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import HomeScreen from "./screens/homeScreen/HomeScreen"
import LoginScreen from "./screens/loginScreen/LoginScreen"
import "./_app.scss"

import { Redirect, Route, Switch, useHistory} from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"


const Layout = ({children}) => {

  const [sidebar, toggleSidebar] = useState(false);



  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return(
    <>
     <Header handleToggleSidebar= {handleToggleSidebar}/>
     <div className="app__container">
       <Sidebar sidebar = {sidebar} handleToggleSidebar ={handleToggleSidebar} />

       <container fluid className="app__main ">
          {children}
        </container>
      </div>
    </>
  )  
}

const App = () => {

  const {accessToken, loading} = useSelector(state => state.auth)

  const history = useHistory()

  if (!loading && !accessToken){

  }

  useEffect(() => {
    if (!loading && !accessToken){
      history.push("/login")
    }

  }, [accessToken,loading, history])


  return ( 
    
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen/>
          </Layout>
        </Route>
        <Route path="/login">
          <LoginScreen/>
        </Route>

        <Route path="/search">
          <Layout>
            <h1>Search me</h1>
          </Layout>
        </Route>

        <Route>
          <Redirect to="/"/>
        </Route>
      </Switch>

  
  
  )
}

export default App;