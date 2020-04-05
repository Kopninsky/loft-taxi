import React, { Component } from 'react'
import { Logo } from 'loft-taxi-mui-theme'
import {
  Button,
  Link,
  TextField
} from '@material-ui/core'

import './reg.scss'

export default class Reg extends Component {
  render() {
    const{ pages, setPage } = this.props
    return (
      <section className="ref__section">
        <div className="ref__box">
          <Logo color="primary"/>
        </div>
        <div className="ref__box ref__box-form">
          <form className='ref__form'>
            <p className='ref__title'>Регистрация</p>
            <div className='ref__new-user'>
              <div>Уже зарегистрирован? <Link onClick={()=>setPage(pages.profile)}>Войти</Link></div>
            </div>
            <TextField label="Имя" />
            <TextField label="Фамилия" />
            <TextField label="Пароль" />
            <Button 
              onClick={()=>setPage(pages.login)}
              variant="contained"
              color="primary">
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </section>
    )
  }
}
