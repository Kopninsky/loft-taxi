import React, {useContext} from 'react'

import {
  pagesData,
  Login,
  Map,
  Nopage,
  Profile,
  Singin
} from '../../Pages'
import { PageContext } from '../../Context'

export default function Content() {
  const { page } = useContext(PageContext)

  switch (page) {
    case pagesData.login:
      return <Login />
    case pagesData.profile:
      return <Profile />
    case pagesData.singin:
      return <Singin />
    case pagesData.map:
      return <Map />
    default:
      return <Nopage />
  }
}
