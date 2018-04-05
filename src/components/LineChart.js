import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


export default class LineChart extends Component {
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
		  borderColor: 'rgba(75,192,192,1)',
		  borderCapStyle: 'butt',
		  borderJoinStyle: 'round',
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
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 11,
			  maxRotation: 0
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
			  max: 100,
              maxTicksLimit: 5
            },
            gridLines: {
              color: "rgba(0, 0, 0, .05)",
            }
          }],
        },
        legend: {
          display: false
        }
    };

    return (
	  <Line data={data} options={options}/>
    );
  }
};