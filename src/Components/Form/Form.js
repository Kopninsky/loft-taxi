import React from 'react'
import propTypes from 'prop-types'

import { TextField, Button } from '@material-ui/core'

const Form = ({ configure }) => {
  const { form, inputs, buttons } = configure

  return (
    <form 
      onSubmit={(e)=>{
        e.preventDefault()
        form.onSubmit(e)
      }}>
      {
        inputs.map((el)=>{
          return (
            <TextField 
              key={el.id}
              type={el.type}
              label={el.label}
              required={el.required}/>
          )
        })
      }
      {
        buttons.map((el)=>{
          return (
            <Button
              key={el.id}
              type={el.type}
              variant="contained"
              color="primary">
              {el.text}
            </Button>
          )
        })
      }
    </form>
  )
}


Form.propTypes = {
  configure: propTypes.shape({
    form: propTypes.shape({
      onSubmit: propTypes.func
    }),
    inputs: propTypes.arrayOf(propTypes.shape({
      id: propTypes.number.isRequired,
      type: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      required: propTypes.bool.isRequired
    })).isRequired,
    buttons: propTypes.arrayOf(propTypes.shape({
      id: propTypes.number.isRequired,
      type: propTypes.string.isRequired,
      text: propTypes.string.isRequired
    })).isRequired
  }).isRequired
}

export default Form