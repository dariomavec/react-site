import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';


export default class PieChart extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {	
	const PALETTE = [
		'#2c3e50',
		'#16a085',
		'#27ae60'
	];
	let key = Array.from(this.props.data.y.keys()); // Array of the number of y classes
	let colors = key.map(i => PALETTE[i % PALETTE.length]); // Palette split between the classes
	
	const data = {
		labels: this.props.data.x,
		datasets: [{
			data: this.props.data.y,
			backgroundColor: colors,
			hoverBackgroundColor: colors
		}]
	};
	
	const options = {
		legend: {
			reverse: true
		}
	}
	
    return (
	  <Pie data={data} options={options}/>
    );
  }
};