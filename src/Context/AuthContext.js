import React, { useState } from 'react'
import propTypes from 'prop-types'

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
    loginStatus,
    login,
    logout
  }

  return(
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children : propTypes.element.isRequired
}