import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Home from './Home';

export default function Forming() {
  const history = useHistory();
  
	const navToNewReq = () => {
    history.push('/Newrequest');
  }
	return (
		<>
			<Home />
			<Button variant="success" style={{ float: "right" }} onClick={navToNewReq}>Create New Request</Button>{' '}
		</>
	)
}