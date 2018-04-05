import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { Container, Row, Col } from 'reactstrap';


export default class NullChart extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {	
    return (
	  <Container>
	   <Row>
		<Col className='block'>
			<br/><br/><br/>
			<h1>Select a player</h1>
		</Col>	   
	   </Row>	  
	  </Container>
    );
  }
};