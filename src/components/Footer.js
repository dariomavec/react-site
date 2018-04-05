import React, { Component } from 'react';
import footerSplash from '../splash-footer.jpg';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
		<Container>	
			<Row>
				<Col>
				<h1>Get in touch!</h1>
				</Col>
			</Row>
			<Row className="align-items-center Footer">
				<Col className="col-12 col-md-6">
					<img src={footerSplash} className="footer-pic" alt="Footer"></img>
				</Col>
				<Col className="col-12 col-md-6">					
					<h3>
					  <a href="https://linkedin.com/in/dario-mavec" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin i-hov"/></a>  
					  <a href="https://github.com/dariomavec" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square i-hov"/></a>  
					  <a href="mailto:dario.mavec@gmail.com?Subject=Greetings!" target="_top"><i className="fas fa-envelope-square i-hov"/></a>
					</h3>
					<br/>
					<p>Built with React by Dario Mavec.<br/><br/>
					Check out the <a href="https://github.com/dariomavec/site" target="_blank" rel="noopener noreferrer">repo</a>!<br/>
					Credit to Matthew Thorry's <a href="https://github.com/mthorry/site" target="_blank" rel="noopener noreferrer">work</a> which got me started.
					</p>
				</Col>
			</Row>
		</Container>
    );
  }
}