import React from 'react'

const Checkbox = ({value, onChange}) => {
  return (
    <>
     <input type="checkbox" checked={value} onChange={onChange} />   
    </>
  )
}

export default Checkbox