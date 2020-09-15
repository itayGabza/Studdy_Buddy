import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


function Welcoming() {
    return (
        <div>
            <Jumbotron>
           {/* <Image style={{align:"center", width: 50,}} src={require('./logo.jpeg')}/> */}
            <h1 style={{textAlign:"center"}}>Study Buddy</h1>
            <p style={{textAlign:"center"}}>
                Platform to create wonderful new friendships and study buddies
            </p>
            <p style={{textAlign:"center"}}>        
                <Button href="/Learn" variant="primary">Learn more</Button>
            </p>
            </Jumbotron>

            <Image src="https://rlc.rutgers.edu/sites/default/files/styles/banner/public/banners/study-group-banner-alt.jpg?itok=oGlGZAgv" fluid />
        </div>

    )
}

export default Welcoming;