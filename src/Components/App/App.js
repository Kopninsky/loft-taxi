import React, { Component } from 'react'
import Login from '../Login'
import Profile from '../Profile'
import Map from '../Map'
import Reg from '../Reg'

import './app.scss'

class App extends Component {
  state = {
    curPage : null
  }

  pages = {
    login : <Login />,
    profile : <Profile/>,
    reg : <Reg/>,
    map : <Map/>
  }

  setPage = (page) => {
    this.setState({curPage: page})
  }

  componentWillMount() {
    this.setPage(this.pages.login)
  }
  

  render() {
    const {login, profile, reg, map} = this.pages

    switch (this.state.curPage) {
      case login:
        return <Login pages={this.pages} setPage={this.setPage}/>
      case profile:
        return <Profile pages={this.pages} setPage={this.setPage}/>
      case reg:
        return <Reg pages={this.pages} setPage={this.setPage}/>
      case map:
        return <Map pages={this.pages} setPage={this.setPage}/>
      default:
        return null
    }
  }
}

export default App