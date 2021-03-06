import React from "react";

const MessageContainer = ({handleGoBack, sendMessage, value, onChange, reciever}) => {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white fw-bold">
      <img src="https://img.icons8.com/ios-glyphs/30/000000/circled-left.png" onClick={() => handleGoBack()} alt="" />

        {reciever}</div>
      <div className="card-body" style={{height:"300px"}}></div>


      <div className="card-footer p-0">
        <form onSubmit={(e)=> sendMessage(e)} className="d-flex">
          <textarea placeholder="Type Here...." className="form-control rounded-0" style={{flex:1}}
          onChange={(e)=> onChange(e.target.value)}
          value={value}/>
          <input type="file" className="form-control" style={{flex:0.3}} />
          <button type="submit"  className='btn btn-success rounded-0' >
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/filled-sent.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default MessageContainer;
