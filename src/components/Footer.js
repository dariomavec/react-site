import React, { Component } from 'react';
import footerSplash from '../splash-footer.jpg';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
		<Container>
			<Row>
				<Col>
				<br/>
				</Col>
			</Row>			
			<Row className="align-items-center">
				<Col className="col-8">
					<img src={footerSplash} className="footer-pic" alt="Footer"></img>
				</Col>
				<Col className="col-4">
					<h1>Questions?<br/>Hit me up!</h1>
					<h3>
					  <a href="https://linkedin.com/in/dario-mavec" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin i-hov"/></a>  
					  <a href="https://github.com/dariomavec" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square i-hov"/></a>  
					  <a href="mailto:dario.mavec@gmail.com?Subject=Greetings!" target="_top"><i className="fas fa-envelope-square i-hov"/></a>
					</h3>
				</Col>
			</Row>
			
			<Row>
				<Col>
				<br/>
				</Col>
			</Row>
		</Container>
      </div>
    );
  }
}