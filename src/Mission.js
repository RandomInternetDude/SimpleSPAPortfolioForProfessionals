import React from 'react'
import Statement from './Statement'
import "./Mission.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Mission() {
    return (
        <div className="mission">
        <div className="mission__top">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFCZ6LbMlds-A/profile-displayphoto-shrink_800_800/0/1562695207256?e=1613001600&v=beta&t=6FiQ9xxzJRi2KSQAUzTk5xU-uxbU1HGcNP0S7lC5YXQ" alt=""/>
            <div>
            <h2 className="mission__title">DR. Aisha Rivera Margarin, MD, MS.</h2>
            <p className="mission__bio">Program Director, Occupational and Environmental Medicine Residency at Johns Hopkins Bloomberg School of Public Health</p>
            <Link className="btn btn-outline-primary" className="mission__button" to="/resume/aishas resume.pdf" target="_blank" download>
            <Button variant="outline-primary">Download CV</Button>
            </Link>


            </div>
       
        </div>
        <Statement />  
        </div>
    )
}

export default Mission



