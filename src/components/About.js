import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <div className="About section">
	  <h1><br/>About Me!</h1>
		<Container>
			<Row>
				<Col>
				<h3>My name is <strong>Dario Mavec</strong> and data science is my game. I have spent the last 5 years consulting with major <strong>governments, companies</strong> and <strong>organisations</strong> to discover <strong>interesting</strong> and <strong>useful</strong> insights from data.</h3>
				</Col>
			</Row>
			<Row>
			<h1><br/></h1>
			</Row>
			<Row>
				<Col>
				<h1> <i className="fas fa-signal" aria-hidden="true"/> </h1>
				<br/>
				I have studied and implemented a wide range of statistical techniques including logistic, random forest, model matrix approaches, unsupervised segmentation models and more!
				</Col>
				<Col>
				<h1> <i className="fas fa-industry" aria-hidden="true"/> </h1>
				<br/>
				I have deep experience working for top-tier consulting firm, Accenture, in challenging projects across the telecommunications, government, resources and entertainment industries.
				</Col>
				<Col>
				<h1> <i className="fas fa-laptop" aria-hidden="true"/> </h1>
				<br/>
				I have delivered projects using a wide range of toolsets (R, Python, SQL, SAS, Alteryx, AWS), often needing to learn and master fresh kits on the fly.
				</Col>
			</Row>
		</Container>
      </div>
    );
  }
}