import React, { Component } from 'react';
import NavBar from './NavBar';
import Welcome from './Welcome';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';

export default class PersonalPage extends Component {
	render() {
		return(
		<div className="App">		
			<NavBar />
			<Container>				
				<Row>
					<Welcome />					
				</Row>
				<Row id="about">
					<Col>
						<h1><a href="#about"><i className="fas fa-arrow-circle-down" aria-hidden="true"/> </a></h1>
					</Col>
				</Row>
				<Row>
					<About />
				</Row>
				<Row id="projects">
					<Col>
						<h1><a href="#projects"><i className="fas fa-arrow-circle-down" aria-hidden="true"/> </a></h1>
					</Col>
				</Row>
				<Row>
					<Projects />
				</Row>
				<Row className="section" id="contact">
					<Footer />
				</Row>
			</Container>
		</div>
	  )
	}
}
