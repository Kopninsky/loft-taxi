import React, { useContext } from 'react'
import { Logo } from 'loft-taxi-mui-theme'
import {
  Button,
  Link,
  TextField
} from '@material-ui/core'

import { pagesData } from '../'
import {AuthContext} from '../../Context'

import './singin.scss'

const  Singin = ({ handlePage }) => {
  const { login } = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    return login()
    
  }
  return (
    <section className="ref__section">
      <div className="ref__box">
        <Logo color="primary"/>
      </div>
      <div className="ref__box ref__box-form">
        <form 
          onSubmit={e => handleSubmit(e)}
          className='ref__form'>
          <p className='ref__title'>Регистрация</p>
          <div className='ref__new-user'>
            <div>
              Уже зарегистрирован? 
              <Link onClick={()=>handlePage(pagesData.login)}>
                Войти
              </Link>
            </div>
          </div>
          <TextField label="Имя" />
          <TextField label="Фамилия" />
          <TextField label="Пароль" />
          <Button 
            type='submit'
            variant="contained"
            color="primary">
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Singin
