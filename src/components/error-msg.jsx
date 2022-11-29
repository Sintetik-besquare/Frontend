import React from 'react'

const errMsgStyle = {
    color:"red",
    fontSize:"12px",
}

 const ErrorMsg = (err) => {
  return (
    <div style={errMsgStyle}>{err.msg}</div>
  )
}

export default ErrorMsg