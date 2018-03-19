import React, { Component } from 'react';
import ReactDOM from 'react';
import logo from './logo.svg';
import './App.css';

class Chart extends Component {
  render() {
    return (
		<div className="col-lg-3">
			<div className="card mb-3">
				<div className="card-header">
					<i className="fa fa-chart-area"></i> Wins Over Time
				</div>
				<div className="card-body">
					{this.props.value}
				</div>
				<div className="card-footer small text-muted">Updated ???</div>
			</div>
		</div>
    );
  }
}

class Dashboard extends Component {
	renderChart(i) {
		return <Chart value={i}/>;
	}
	
	render() {
		return(
		<div className="row">
			{this.renderChart(0)}
			{this.renderChart(1)}
			{this.renderChart(2)}
			{this.renderChart(3)}
		</div>
		);
	}
}

class Header extends Component {
	render() {
		return(
		<div className="App">
				<header className="App-header">
				<h1 className="App-title">League Tracker</h1>
			</header>
		</div>
	  )
	}
	
}


class App extends Component {
	render() {
		return(
		<div>
			<Header />
			<Dashboard />	
		</div>
	  )
	}
	
}

export default App;

