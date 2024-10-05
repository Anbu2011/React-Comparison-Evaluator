import React from 'react'

const InputFields = ({ label, value, onChange, placeholder, type, name }) => {
  return (
    <>
      <div className='input-2-3'>
          <label className='labels'>{label} :</label>
          <div className='all-inputs'>
              <input 
                  type={type} 
                  value={value} 
                  onChange={onChange} 
                  placeholder={placeholder}
                  name={name}
              />
          </div>
      </div>
    </>
  )
}

export default InputFields