import React from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider.jsx"

function MiniContext() {
  return (
        <UserContextProvider>
            <h1>Context API</h1>

            <Login/>
            <Profile/>
        </UserContextProvider>
    )
}

export default MiniContext;
