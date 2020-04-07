import React, { Component } from 'react'

import Header from '../Header'

import './profile.scss'

export default class Profile extends Component {
  render() {
    const {pages, setPage} = this.props
    return (
      <section className='profile'>
        <Header pages={pages} setPage={setPage}/>
        Profile
      </section>
    )
  }
}
