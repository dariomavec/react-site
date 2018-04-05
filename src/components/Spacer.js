import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class Spacer extends Component {
  render() {
    return (
	<Row id={this.props.id}>
		<Col>
		<p><br/><br/></p>
		</Col>
	</Row>
    );
  }
}