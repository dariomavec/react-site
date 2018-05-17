import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <div className="About section">
			<Row>
				<Col>
				<br/>
				<h1>ABOUT ME<br/></h1>
				<h3>My name is <strong>Dario Mavec</strong> and data science is my passion. I have spent the last 5 years consulting with major <strong>governments, companies</strong> and <strong>organisations</strong> to discover <strong>interesting</strong> and <strong>useful</strong> insights from data.</h3>
				</Col>
			</Row>
			<Row>
				<br/>
			</Row>
			<Row>
				<Col className="col-12 col-md-4">
				<br/>
				<h1> <i className="fas fa-industry" aria-hidden="true"/> </h1>
				<p>Deep experience working for top-tier consulting firm Accenture, in challenging projects across the telecommunications, government, resources and entertainment industries.</p>
				</Col>
				<Col className="col-12 col-md-4">
				<br/>
				<h1> <i className="fas fa-laptop" aria-hidden="true"/> </h1>
				<p>Delivered projects using a wide range of toolsets - including R, Python, SQL, SAS, Alteryx, AWS - often requiring to learn and master fresh kits on the fly.</p>
				</Col>
				<Col className="col-12 col-md-4">
				<br/>
				<h1> <i className="fas fa-signal" aria-hidden="true"/> </h1>
				<p>Developed use cases leveraging a wide range of statistical techniques from supervised (logistic, random forest, model matrix approaches) to unsupervised (k-means, hierarchical, PCA) and more!</p>
				</Col>
			</Row>
		
      </div>
    );
  }
}