import React, { useContext } from 'react'
import { Logo } from 'loft-taxi-mui-theme'
import {
  Button,
  Link,
  TextField
} from '@material-ui/core'

import { pagesData } from '../'
import { AuthContext, PageContext } from '../../Context'

import './login.scss'

const Login = () => {
  const { login } = useContext(AuthContext)
  const { handlePage } = useContext(PageContext)

  const handleSubmit = (e) => {
      e.preventDefault()
      return login()
  }

  return (
    <section className="login__section">
      <div className="login__box">
        <Logo white/>
      </div>
      <div className="login__box login__box-form">
        <form
          onSubmit={e => handleSubmit(e)}
          className='login__form'>
          <p className='login__title'>Войти</p>
          <div className='login__new-user'>
            <div>Новый пользовавтель? <Link onClick={()=>handlePage(pagesData.singin)} >Зарегистрируйтесь</Link></div>
          </div>
          <TextField required label="Имя пользователя" />
          <TextField required label="Пароль" />
          <Button
            type='submit'
            variant="contained"
            color="primary">
            Войти
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Login