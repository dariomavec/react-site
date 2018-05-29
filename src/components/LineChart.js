import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


export default class LineChart extends Component {	
	render() {	
	const data = {
	  labels: this.props.data.x.map(i => {
			let d = new Date(i);
			return d.toDateString();
		}),
	  datasets: [
		{
		  label: 'Win Rate',
		  yAxisID: 'win-rate',
		  data: this.props.data.y,
		  fill: false,
		  lineTension: 0,
		  backgroundColor: 'rgba(75,192,192,1)',
		  borderColor: 'rgba(75,192,192,1)',
		  pointBorderWidth: 0.1,
		  pointHoverRadius: 5,
		  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
		  pointHoverBorderColor: 'rgba(220,220,220,1)',
		  pointHoverBorderWidth: 2,
		  pointRadius: 1,
		  pointHitRadius: 10
		},
		{
		  label: 'Games',
		  yAxisID: 'games',
		  data: this.props.data.z,
		  fill: true,
		  lineTension: 0,
		  backgroundColor: 'rgba(36, 49, 25,0.5)',
		  // borderColor: 'rgba(36, 49, 25,1)',
		  // borderCapStyle: 'butt',
		  // borderJoinStyle: 'round',
		  // pointBorderColor: 'rgba(36, 49, 25,1)',
		  // pointBackgroundColor: 'rgba(36, 49, 25,1)',
		  // pointBorderWidth: 0.1,
		  pointHoverRadius: 5,
		  pointHoverBackgroundColor: 'rgba(36, 49, 25,0.5)',
		  pointHoverBorderColor: 'rgba(220,220,220,0.5)',
		  pointHoverBorderWidth: 2,
		  pointRadius: 0,
		  pointHitRadius: 10
		}
	  ]
	};
	const options = {
        scales: {
			xAxes: [{
				type: 'time',
				time: {
					unit: 'quarter'
					},	  
				gridLines: {
					display: false
					}
			}],
          yAxes: [{
			  id: 'win-rate',
			  display: true,
			  position: 'left',
			  ticks: {
				  min: 0,
				  max: 100,
				  maxTicksLimit: 5,
				  display: true,
				  position: 'left',
				  callback: (label) => label + '%'
				  },
			   gridLines: {
				  color: "rgba(0, 0, 0, .05)",
				  }
				},
				{
			  id: 'games',
			  display: true,
			  position: 'right',
			  ticks: {
				  min: 0,
				  maxTicksLimit: 5,
				  },
			   gridLines: {
				   drawOnChartArea: false
				   }
				   }]
		}
    };

    return (
	  <Line data={data} options={options}/>
    );
  }
};