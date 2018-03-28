import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';


export default class ChartCard extends Component {	
	constructor(props) {
		super(props);
	}
	
	 render() {
		return(
		  <Card>
			<CardBody>
			  <CardTitle>{this.props.title}</CardTitle>
			  <BarChart data={this.props.data}/>
			</CardBody>
		  </Card>
		)
	}
}