import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css'; 

function Login(){
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>
            <Form style={{textAlign:"center"}}> 
            <h1 style={{fontFamily:"Brush Script MT", fontSize:70,}}>Log In</h1><br />
                <Form.Group style={{align:"center",}} controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>          
                    <Form.Control ID="1" class="col-xs-2" style={{textAlign:"center",}} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            

                <Form.Group controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control ID="2" style={{textAlign:"center"}} type="password" placeholder="Password" />
                </Form.Group>
                <Button href="/"onClick={varify()} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            </div>
        )
        
}

function varify() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(document.getElementById("1")).toLowerCase());
}

export default Login;
