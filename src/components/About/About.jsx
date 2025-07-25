import React from 'react'
import './about.css'

const About = ({person}) => {
    return (
       
            <div className= 'Aboutcontainer'> 
            <p> TEXAS COLLEGE OF MANAGEMENT/IT </p>
            <p> My name is {person.firstName} and I'm {person.age} years old</p>
        </div>
    );
    
        
}
export default About;