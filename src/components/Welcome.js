import React, { Component } from 'react';
import mainpic from '../splash-crop.jpg';
import { Container, Row, Col } from 'reactstrap';

export default class Welcome extends Component {
  render() {
    return (
	<div className="Welcome">
     <Container className="flex-container">
		<Row>
			<Col>
			<br/><br/><br/><br/>
			</Col>
		</Row>
		<Row className="align-items-center">
			<Col className="col-12 col-md-5">
				<img src={mainpic} className="main-pic" alt="Main Splash"></img>
			</Col>
			<Col className="col-12 col-md-7">
			<h1 className="welcome-intro">Hi! This is <strong>me</strong>.
				<br/>	
				<br/>	
				TEST A <strong>data scientist</strong>, <strong>explorer</strong> & <strong>highly evolved ape</strong> with 490,560 hours to burn.
				<br/>
				<br/>
				<strong>Let's chat!</strong>
				<br/>
				<a href="https://drive.google.com/file/d/1HmM6t2huwO3T7KQ1lEn3Yd7UrZeIow5m/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="button resume-button"><i className="far fa-file-pdf" aria-hidden="true"/> CV</button></a>
				<br/>
				  <a href="https://linkedin.com/in/dario-mavec" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin i-hov"/></a>  
				  <a href="https://github.com/dariomavec" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square i-hov"/></a>  
				  <a href="mailto:dario.mavec@gmail.com?Subject=Greetings!" target="_top"><i className="fas fa-envelope-square i-hov"/></a>
				</h1>
			</Col>
		</Row>
		<Row>
			<Col>
			<br/><br/><br/><br/>
			</Col>
		</Row>
	</Container>
	</div>
    );
  }
}