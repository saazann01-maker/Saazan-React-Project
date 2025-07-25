import React from 'react'
import './Contact.css'
export const Contact = () => {
    const isLoggedIn = false;
    if(isLoggedIn){
  return (
    <h1>Welcome back!</h1>
 )
}
    else {
       return (
        <div className='AppContact'><h1>Hello! Please log in.</h1></div>
            
        )
    }
}
export default Contact;