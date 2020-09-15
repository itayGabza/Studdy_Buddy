import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


function Learn() {
    return (
        <div>
            <Jumbotron>
           {/* <Image style={{align:"center", width: 50,}} src={require('./logo.jpeg')}/> */}
            <h1 style={{textAlign:"center"}}>Study Buddy</h1>
            <p style={{textAlign:"center"}}>

            </p>
            <p style={{textAlign:"center"}}>
                Study buddy is a new friendly platform for you to find your most suitable study partner.            
            </p>
            <p style={{textAlign:"center"}}>
                Here, you can upload a request to find study partners according to your important criteria -           
            </p>
            <p style={{textAlign:"center"}}> 
                study hours, learning task, group size and more.             
            </p>
            <p style={{textAlign:"center"}}>
                After you upload your request, we will offer you the partners that match to you.            
            </p>
            <h2 style={{textAlign:"center", size:50,}}>
                Join Us!            
            </h2>
            </Jumbotron>

            <Image src="https://rlc.rutgers.edu/sites/default/files/styles/banner/public/banners/study-group-banner-alt.jpg?itok=oGlGZAgv" fluid />
        </div>

    )
}

export default Learn;