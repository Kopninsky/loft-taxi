import React, { Component } from 'react'
import { Logo } from 'loft-taxi-mui-theme'
import {
  Button,
  Link,
  TextField
} from '@material-ui/core'

import './login.scss'

export default class Login extends Component {
  render() {
    const {pages, setPage} = this.props
    return (
      <section className="login__section">
        <div className="login__box">
          <Logo color="primary"/>
        </div>
        <div className="login__box login__box-form">
          <form
            id='form'
            onSubmit={()=>{setPage(pages.map)}}
            className='login__form'>
            <p className='login__title'>Войти</p>
            <div className='login__new-user'>
              <div>Новый пользовавтель? <Link onClick={()=>setPage(pages.reg)} >Зарегистрируйтесь</Link></div>
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
}
