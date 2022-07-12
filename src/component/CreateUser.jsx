import React from 'react'

const CreateUser = ({handleSetUsername,value,onChange}) => {
  return (
    <div className="d-flex">
            <form onSubmit={()=>handleSetUsername()} className="p-2">
              <label>Enter Your Nane</label>
              <input  className="form-control" value={value} onChange={(e) => onChange(e.target.value)} />
            </form>
        </div>
  )
}

export default CreateUser;