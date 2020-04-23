import React from 'react'

import { pagesData } from '../'

export default function Nopage({ hadnlePage }) {
  return (
    <div>
      <p>Такой страницы нет</p>
      <button
        onClick={hadnlePage(pagesData.login)}>
          Вернуться на страницу регистрации
      </button>
    </div>
  )
}
