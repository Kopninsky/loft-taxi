import React, { useRef, useEffect } from 'react'
import * as MapBox from 'mapbox-gl'

import Header from '../../Components/Header'

import './map.scss'

MapBox.accessToken = 'pk.eyJ1Ijoia29wbmluc2t5IiwiYSI6ImNrOTZma2Z6dTA3dnczZ3RjdjRjbHdzYzQifQ.8ooCgCN2nOuhSusOQ_aXgw'

const Map = ({ handlePage }) => {
  const myRef = useRef()

  useEffect(() => {
    new MapBox.Map({
      container: myRef.current,
      style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
      center: [37.6170572, 55.752139],
      zoom: 10.25
    })

  }, [])

  return (
    <section className='map'>
      <Header handlePage={handlePage}/>
      <div ref={myRef} className="map__mb"></div>
    </section>
  )
}

export default Map
