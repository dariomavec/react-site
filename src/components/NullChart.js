import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


export default class NullChart extends Component {	
	render() {	
    return (
	  <Container>
	   <Row>
		<Col className='block'>
			<br/>
			<h1>Select a player</h1>
			<br/>
		</Col>	   
	   </Row>	  
	  </Container>
    );
  }
};