import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './App.css';


function ContactUs() {
    return (
        <div>
            <img style={{position: "absolute", left: "18%"}}className="im" src={require('./contact.jpeg')}/>
        </div>

    )
}

export default ContactUs;