import React, { Component } from 'react'
import { Logo } from 'loft-taxi-mui-theme'
import { 
  AppBar,
  Toolbar,
  Button
} from '@material-ui/core'

export default class Header extends Component {
  render() {
    const {pages, setPage} = this.props
    
    return (
      <>
        <AppBar 
          color="inherit"
          position="static">
          <Toolbar>
            <Logo color="secondary"/>
            <Button onClick={()=>setPage(pages.map)} color="inherit">Карта</Button>
            <Button onClick={()=>setPage(pages.profile)} color="inherit">Профиль</Button>
            <Button onClick={()=>setPage(pages.login)} color="inherit">Выйти</Button>
          </Toolbar>
        </AppBar>
      </>
    )
  }
}
