import React, { useContext } from 'react'
import { Logo } from 'loft-taxi-mui-theme'
import { 
  AppBar,
  Toolbar,
  Button
} from '@material-ui/core'

import { pagesData } from '../../Pages'
import { AuthContext } from '../../Context'

const Header = ({ handlePage }) => {
  const { logout } = useContext(AuthContext)

  const setButtons = () => {
    const pagesArr = Object.values(pagesData)
    const newArr = pagesArr.filter(el => el.title !== 'Вход' && el.title !== 'Регистрация')

    return newArr.map(
      el => <Button
              key={el.id}
              onClick={()=>handlePage(el)}
              color="inherit">
                {el.title}
            </Button>
    )
  }

  return (
    <AppBar 
      color="inherit"
      position="static">
      <Toolbar>
        <Logo color="secondary"/>
        {setButtons()}
        <Button
          onClick={()=>logout()}
          color="inherit">
          Выход
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header