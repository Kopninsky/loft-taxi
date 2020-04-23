import React from 'react'

const Form = () => {
  return (
    <form onSubmit={(e)=>{e.preventDefault()}}>
      <input type="text"/>
      <button type="submit"></button>
    </form>
  );
}

export default Form