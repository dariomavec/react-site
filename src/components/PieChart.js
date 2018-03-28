import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';


export default class PieChart extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {	
	const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

    return (
	  <Pie data={data}/>
    );
  }
};