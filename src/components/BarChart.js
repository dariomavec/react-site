import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


export default class BarChart extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {	
	const data = {
	  labels: this.props.data.x,
	  datasets: [
		{
		  label: this.props.data.legend,
		  fill: false,
		  lineTension: 0.1,
		  backgroundColor: 'rgba(75,192,192,0.4)',
		  borderColor: 'rgba(75,192,192,1)',
		  borderCapStyle: 'butt',
		  borderDash: [],
		  borderDashOffset: 0.0,
		  borderJoinStyle: 'miter',
		  pointBorderColor: 'rgba(75,192,192,1)',
		  pointBackgroundColor: '#fff',
		  pointBorderWidth: 1,
		  pointHoverRadius: 5,
		  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
		  pointHoverBorderColor: 'rgba(220,220,220,1)',
		  pointHoverBorderWidth: 2,
		  pointRadius: 1,
		  pointHitRadius: 10,
		  data: this.props.data.y
		}
	  ]
	};
	
	const options = {
        scales: {
          xAxes: [{
            time: {
              unit: 'date'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              maxTicksLimit: 5
            },
            gridLines: {
              color: "rgba(0, 0, 0, .125)",
            }
          }],
        },
        legend: {
          display: false
        }
    };

    return (
	  <Bar data={data} options={options}/>
    );
  }
};