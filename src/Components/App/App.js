import React, { useContext } from 'react'

import { pagesData } from '../../Pages'
import { PageContext } from '../../Context'
import Content from '../Content'
import Header from '../Header'

import './app.scss'

const App = () => {
  const { page } = useContext(PageContext)

  return (
    <>
      {page === pagesData.map || page === pagesData.profile ? <Header /> : null}
      <Content />
    </>
  )
}

export default App