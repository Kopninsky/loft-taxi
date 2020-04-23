import React from 'react'

import Header from '../../Components/Header'

import './profile.scss'

const Profile = ({ handlePage }) => {

  return (
    <section className='profile'>
      <Header handlePage={handlePage}/>
      Profile
    </section>
  )
}

export default Profile