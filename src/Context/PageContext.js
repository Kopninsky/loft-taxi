import React, { useState, useEffect, useContext } from 'react'
import propTypes from 'prop-types'

import { pagesData } from '../Pages'
import { AuthContext } from './'

export const PageContext = React.createContext({})

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(pagesData.login)
  const { loginStatus } = useContext(AuthContext)

  const handlePage = (page) => {
    setPage(page)
  }

  useEffect(() => {
    !loginStatus ? handlePage(pagesData.login) : handlePage(pagesData.map)
  }, [loginStatus])

  const value = {
    page,
    handlePage
  }

  return(
    <PageContext.Provider value={ value }>
      { children }
    </PageContext.Provider>
  )
}

PageProvider.propTypes = {
  children : propTypes.element.isRequired
}