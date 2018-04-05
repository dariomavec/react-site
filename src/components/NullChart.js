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
		<Col col='gray'>
			<br/>
		</Col>	   
	   </Row>	  
	  </Container>
    );
  }
};