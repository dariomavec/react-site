import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class Spacer extends Component {
  render() {
    return (
	<Row>
		<Col>
		<br/><br/>
		</Col>
	</Row>
    );
  }
}