import React, { useContext } from 'react'

import { pagesData } from '../'
import { PageContext } from '../../Context'

const  Nopage = () => {
  const { handlePage } = useContext(PageContext)
  return (
    <div>
      <p>Такой страницы нет</p>
      <button
        onClick={handlePage(pagesData.login)}>
          Вернуться на страницу регистрации
      </button>
    </div>
  )
}

export default Nopage