import React, { Component } from 'react';
import ReactDOM from 'react';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
	render() {
		return(
		<div className="App">
			<NavBar />
			
			<Container>
				<Row>
					<br/>
				</Row>
				<Row>
					<Welcome />					
				</Row>
				<Row>
					<Col>
						<h1><i className="fas fa-arrow-circle-down" aria-hidden="true"/> </h1>
					</Col>
				</Row>
				<Row id="about">
					<About />
				</Row>
				<Row>
					<Col>
						<h1><i className="fas fa-arrow-circle-down" aria-hidden="true"/> </h1>
					</Col>
				</Row>
				<Row id="projects">
					<Projects />
				</Row>
				<Row>
					<Col>
						<h1><i className="fas fa-arrow-circle-down" aria-hidden="true"/> </h1>
					</Col>
				</Row>
				<Row id="contact">
					<Footer />
				</Row>
			</Container>
		</div>
	  )
	}
	
}

export default App;

