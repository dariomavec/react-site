import React, { Component } from 'react';
import NavBar from './NavBar';
import Welcome from './Welcome';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Spacer from './Spacer';
import { Container, Row, Col } from 'reactstrap';

export default class Me extends Component {
	render() {
		return(
		<div className="App">		
			<NavBar />
			<Container>
				<Spacer />
				<Spacer />
				<Welcome />	
				<Spacer />
				<Row id="about">
					<Col>
						<h1><a href="#about"><i className="fas fa-arrow-circle-down i-hov" aria-hidden="true"/> </a></h1>
					</Col>
				</Row>
				<Spacer />
				<About />
				<Spacer />
				<Row id="projects">
					<Col>
						<h1><a href="#projects"><i className="fas fa-arrow-circle-down i-hov" aria-hidden="true"/> </a></h1>
					</Col>
				</Row>
				
				<Projects />
				<Footer />
			</Container>
		</div>
	  )
	}
}