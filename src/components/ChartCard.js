import React, { Component } from 'react';
import { Col, Card, CardTitle, CardBody } from 'reactstrap';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import NullChart from './NullChart';
import LoadingSpinner from './LoadingSpinner';


export default class ChartCard extends Component {	
	constructor(props) {
		super(props);
		this.title = '';
		this.data = {};
		this.options = {};
		this.type = '';
		this.loading = true;
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
		<Col className='col-12 col-md-6'>
		  <Card>
			  {this.props.loading ? 
			   <LoadingSpinner/> :
			   <CardBody>
				<CardTitle>{this.props.title}</CardTitle>
				<Chart { ...props} />
			   </CardBody>}	
		  </Card>
		  <br/>
		</Col>
		)
	}
}