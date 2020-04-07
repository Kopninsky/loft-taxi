import React, { Component } from 'react'
import Login from '../Login'
import Profile from '../Profile'
import Map from '../Map'
import Reg from '../Reg'
import Header from '../Header'

import './app.scss'

const pages = {
  login : <Login />,
  profile : <Profile/>,
  reg : <Reg/>,
  map : <Map/>
}

class App extends Component {
  state={
    curPage : pages.login
  }

  setPage = (page) => {
    this.setState({curPage: page})
  }

  getContent = () => {
    switch (this.state.curPage) {
      case pages.login:
        return <Login pages = {pages} setPage={this.setPage}/>
      case pages.profile:
        return <Profile pages = {pages} setPage={this.setPage}/>
      case pages.reg:
        return <Reg pages = {pages} setPage={this.setPage}/>
      case pages.map:
        return <Map pages = {pages} setPage={this.setPage}/>
      default:
        break
    }
  }

  render() {
    return this.getContent()
  }
}

export default App