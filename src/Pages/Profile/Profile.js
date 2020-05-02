import React from 'react'

import Form from '../../Components/Form'
import { configure } from './formData'

import './profile.scss'

const Profile = () => {

  const classes = {
    width: '400px',
    height: '500px'
  }

  return (
    <section className='profile'>
      Profile
      <div style={classes}>
        <Form configure={configure} />
      </div>
    </section>
  )
}

export default Profile