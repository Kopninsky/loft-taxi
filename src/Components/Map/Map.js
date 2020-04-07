import React, { Component } from 'react'

import Header from '../Header'

import './map.scss'

export default class Map extends Component {
  render() {
    const {pages, setPage} = this.props
    return (
      <section className='map'>
        <Header pages={pages} setPage={setPage}/>
        Map
      </section>
    )
  }
}
