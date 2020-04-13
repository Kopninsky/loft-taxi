import React, { Component } from 'react'
import Login from '../Login'
import Profile from '../Profile'
import Map from '../Map'
import Reg from '../Reg'

import './app.scss'

const pages = {
  login : 'Вход',
  profile : 'Профиль',
  reg : 'Регистрация',
  map : 'Карта'
}

class App extends Component {
  state = {
    curPage : pages.login
  }

  setPage = (page) => {
    this.setState({curPage: page})
  }

  render() {
    const {login, profile, reg, map} = pages

    switch (this.state.curPage) {
      case login:
        return <Login pages={pages} setPage={this.setPage}/>
      case profile:
        return <Profile pages={pages} setPage={this.setPage}/>
      case reg:
        return <Reg pages={pages} setPage={this.setPage}/>
      case map:
        return <Map pages={pages} setPage={this.setPage}/>
      default:
        return null
    }
  }
}

export default App