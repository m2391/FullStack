import React from 'react'

//Lähetetään error viesti tarvittaessa.
const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  export default Notification;