import React from 'react';
import '../style/FormContainer.css';

function FormContainer() {
  return (
    <div className='form-container'>
        <div className='form-wrapper'>
                <h1>Let us know how we can improve freeCodeCamp</h1>
                <div className='form-fields'>
                    <div className='label'><label>First Name</label></div>
                    <div className='input-field'><input></input></div>
                </div>
                <div className='form-fields'>
                    <div className='label'><label>Last Name</label></div>
                    <div className='input-field'><input></input></div>
                </div>
                <div className='form-fields'>
                    <div className='label'><label>Email</label></div>
                    <div className='input-field'><input></input></div>
                </div>
               
        </div>

    </div>
  )
}

export default FormContainer