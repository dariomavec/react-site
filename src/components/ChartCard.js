import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import NullChart from './NullChart';


export default class ChartCard extends Component {	
	constructor(props) {
		super(props);
		this.title = '';
		this.data = {};
		this.options = {};
		this.type = '';
	}
	
	 render() {
		const { type, ...props } = this.props

		let Chart = null
		switch (type) {
		  case 'line': Chart = LineChart
		  break
		  case 'bar': Chart = BarChart
		  break
		  case 'pie': Chart = PieChart
		  break
		  default: Chart = NullChart
		  break
		}

		return (
		  <Card>
			<CardBody>
			  <CardTitle>{this.props.title}</CardTitle>
				<Chart { ...props} />
		  	</CardBody>
		  </Card>
		)
	}
}