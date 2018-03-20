import React, { Component } from 'react';
import mainpic from '../splash-crop.jpg';
import { Container, Row, Col } from 'reactstrap';

class Welcome extends Component {
  render() {
    return (
	<div className="Welcome session">
     <Container>
		<Row>
			<Col>
				<img src={mainpic} className="main-pic"></img>
			</Col>
			<Col>
			<h1 className="welcome-intro">Hi! This is me - a <strong>data scientist</strong>, <strong>explorer</strong> & <strong>highly evolved ape</strong> seeking to fulfil my potential
				<br/>
				<br/>
				  <a href="https://linkedin.com/in/dario-mavec" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin i-hov" aria-hidden="true"/></a>  
				  <a href="https://github.com/dariomavec" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square i-hov" aria-hidden="true"/></a>  
				  <a href="mailto:dario.mavec@gmail.com?Subject=Greetings!" target="_top"><i className="fas fa-envelope-square i-hov" aria-hidden="true"/></a>
				<br/>
				<a href="https://drive.google.com/file/d/1HmM6t2huwO3T7KQ1lEn3Yd7UrZeIow5m/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="button resume-button"><i className="far fa-file-pdf" aria-hidden="true"/> CV</button></a>
			</h1>
			</Col>
		</Row>
	</Container>
	</div>
    );
  }
}

export default Welcome;