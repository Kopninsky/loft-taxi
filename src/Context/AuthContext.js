import React, { useState } from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false)

  const login = (login, email) => {
    console.log(login, email)
    setLoginStatus(true)
  }

  const logout = () => {
    setLoginStatus(false)
  }

  const value = {
    loginStatus: loginStatus,
    login: login,
    logout: logout
  }

  return(
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  )
}