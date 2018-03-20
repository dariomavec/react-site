import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class About extends Component {
  render() {
    return (
      <div className="About section">
	  <h3>I am an <strong>experienced data scientist</strong> with a focus on <strong>customer</strong>, <strong>fraud</strong> and <strong>predictive asset management</strong></h3>
		<Container>
			<Row>
				<Col>
				<h1>I am an <strong>experienced data scientist</strong> with a focus on <strong>customer</strong>, <strong>fraud</strong> and <strong>predictive asset management</strong></h1>
				</Col>
			</Row>
			<Row>
			<h1><br/></h1>
			</Row>
			<Row>
				<Col>
				<h1><i className="fas fa-comments" aria-hidden="true"/></h1>
				<br/>
				I can communicate and stuff.
				</Col>
				<Col>
				<h1><i className="fas fa-industry" aria-hidden="true"/></h1>
				<br/>
				I have experience with top tier consulting and stuff.
				</Col>
				<Col>
				<h1><i className="fas fa-laptop" aria-hidden="true"/></h1>
				<br/>
				I work with computers and stuff.
				</Col>
			</Row>
		</Container>
      </div>
    );
  }
}

export default About;