import React from 'react'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'
import UserContextProvider from './Context/UserContextProvider.jsx'


const App = () => {
  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App