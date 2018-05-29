import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';


export default class BarChart extends Component {	
	render() {	
	const data = {
	  labels: this.props.data.x,
	  datasets: [
		{
		  label: this.props.data.legend,
		  backgroundColor: 'rgba(26, 188, 156,0.5)',
		  borderColor: 'rgba(44, 62, 80,1.0)',
		  data: this.props.data.y
		}
	  ]
	};
	
	const options = {
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, .075)",
            }
          }],
        },
        legend: {
          display: false
        }
    };

    return (
	  <HorizontalBar data={data} options={options}/>
    );
  }
};