import React, { useEffect, useState, useContext } from 'react'

import {
  pagesData,
  Login,
  Map,
  Nopage,
  Profile,
  Singin
} from '../../Pages'
import { AuthContext } from '../../Context'

import './app.scss'

const App = () => {
  const [page, setPage] = useState(pagesData.login)
  const { loginStatus } = useContext(AuthContext)

  const handlePage = (page) => {
    setPage(page)
  }

  useEffect(() => {
    !loginStatus ? handlePage(pagesData.login) : handlePage(pagesData.map)
  }, [loginStatus])

  switch (page) {
    case pagesData.login:
      return <Login handlePage={handlePage}/>
    case pagesData.profile:
      return <Profile handlePage={handlePage}/>
    case pagesData.singin:
      return <Singin handlePage={handlePage}/>
    case pagesData.map:
      return <Map handlePage={handlePage}/>
    default:
      return <Nopage handlePage={handlePage}/>
  }
}

export default App