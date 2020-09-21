import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Home() {
    return ( 
            <>
        <Navbar bg="light" variant="#2EA469">
        <Navbar.Brand>
          <a href="/">
          <img src={require('./logo.jpeg')} style={{width:100, marginTop: -7}} />
          </a>
        </Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/forming"  style={{fontSize:20,}}>Find Your Study Buddy</Nav.Link>
            <Nav.Link href="/forming"  style={{fontSize:20,}}>        </Nav.Link>
            <Nav.Link href="/ContactUs" style={{fontSize:20,}}>Contact Us</Nav.Link>
            </Nav>
            <Form inline>
            <Nav.Link href="/Signup" style={{fontSize:20,}}>Sign Up</Nav.Link>
            <Nav.Link href="/Login" style={{fontSize:20,}}>Log In</Nav.Link>
            </Form> 
        </Navbar>
        <br />
        
    </>
    )
}

export default Home;
