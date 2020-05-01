import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import './map.scss'

mapboxgl.accessToken = 'pk.eyJ1Ijoia29wbmluc2t5IiwiYSI6ImNrOTZma2Z6dTA3dnczZ3RjdjRjbHdzYzQifQ.8ooCgCN2nOuhSusOQ_aXgw'

const Map = () => {
  const myRef = useRef()

  useEffect(() => {
    new mapboxgl.Map({
      container: myRef.current,
      style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
      center: [37.6170572, 55.752139],
      zoom: 10.25
    })

  }, [])

  return (
    <section className='map'>
      <div ref={myRef} className="map__mb"></div>
    </section>
  )
}

export default Map
