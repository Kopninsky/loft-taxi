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

    const buttons = [
      {
        id: 1,
        name: 'Карта',
        acronim: pages.map
      },
      {
        id: 2,
        name: 'Профиль',
        acronim: pages.profile
      },
      {
        id: 3,
        name: 'Выйти',
        acronim: pages.login
      }
    ]

    const setButtons = buttons.map(
      el => <Button
              key={el.id}
              onClick={()=>setPage(el.acronim)}
              color="inherit">
                {el.name}
            </Button>
    )

    return (
      <>
        <AppBar 
          color="inherit"
          position="static">
          <Toolbar>
            <Logo color="secondary"/>
            {setButtons()}
          </Toolbar>
        </AppBar>
      </>
    )
  }
}
