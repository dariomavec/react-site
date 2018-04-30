import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChartCard from './ChartCard';
import PlayerDropdown from './PlayerDropdown';
import NavBar from './NavBar';
import _ from 'lodash';


function sum(numbers) {
  return _.reduce(numbers, (a, b) => a + b, 0);
}

function average(numbers) {
  return sum(numbers) / (numbers.length || 1);
}

function make_window(before, after) {
  return function (_number, index, array) {
    const start = Math.max(0, index - before);
    const end   = Math.min(array.length, index + after + 1);
    return _.slice(array, start, end);
  }
}

function moving_average(numbers) {
  return _.chain(numbers)
          .map(make_window(20, 0))
          .map(average)
          .value();
}


export default class Strife extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  items: [],
		  playerName: 'Players',
		  playerData: [],
		  games: [],
		  gameLoaded: false
		};
		this.handlePlayerChange = this.handlePlayerChange.bind(this);
	}
	
	handlePlayerChange(playerName) {
		this.setState({
		  playerName: playerName,
		  playerData: this.state.items.filter(item => item.player_tidy === playerName)
		});
				
		fetch("https://mavec.pythonanywhere.com/games.json/?player__player_name=" + playerName.toLowerCase())
		//fetch("http://localhost:8080/games.json/?player__player_name=" + playerName.toLowerCase())
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
				gameLoaded: true,
				games: result
			  });
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  this.setState({
				gameLoaded: true,
				error
			  });
			}
		  )
	}
	
	componentDidMount() {
		fetch("https://mavec.pythonanywhere.com/players.json")
		//fetch("http://localhost:8080/players.json")
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
				isLoaded: true,
				items: result
			  });
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  )
 
	  }

	render() {
		const { error, isLoaded, items, playerName, playerData, games, gameLoaded } = this.state;
		var rankedData, rankedTitle, winRateData, gameData, gameGraph, gameTitle;
		if (error) {
		  return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
		  return <div>Loading...</div>;
		} else {
		  winRateData = {
			  legend: "Win Rate",
			  x: items.map(item => item.player_tidy),
			  y: items.map(item => item.pct_win) 
			  };
		  
		  // Ranked Games
	      if (playerName === 'Players') {			
			  rankedData = {
				  legend: "Ranked Games",
				  x: ['Ranked', 'Unranked'],
				  y: [items.map(item => item.n_ranked).reduce((a, b) => a + b, 0), items.map(item => item.n_unranked).reduce((a, b) => a + b, 0)]
				  }; 
			  rankedTitle = "Ranked Games (Overall)";
		  }
		  else {
			  rankedData = {
				  legend: "Ranked Games",
				  x: ['Ranked', 'Unranked'],
				  y: [playerData[0].n_ranked, playerData[0].n_unranked]
				  };
			  rankedTitle = "Ranked Games (" + playerName + ")"
		  }
		  
		  // Game data
		  if (gameLoaded) {
			  gameData = {
				  legend: "Win Rate",
				  x: games.map((item, index) => index),
				  y: moving_average(games.map(item => 100 * item.n_wins)).map(item => Math.round(item * 100) / 100)
				  };
			  
			  gameGraph = 'line';
			  gameTitle = "Win Rate Over Last 20 Games (" + playerName + ")"
		  }
		  else {
			  gameData = {};
			  gameGraph = null;
			  gameTitle = ""
		  }
			  			
		  return (
		  <div className="Structure flex-container">
		  <NavBar links={[['Home', '/']]}/>	
		  <Container>
			  <Row>
				  <Col>
				  <h1>Strife</h1>
				  </Col>
			  </Row>
			  <Row>
				  <Col>
					<PlayerDropdown 
						players={items.map(item => item.player_tidy)} 
						name={this.state.playerName}
						onDropdownChange={this.handlePlayerChange}/>		
				  </Col>
				  <Col>
				  Check out the REST API <a href="http://mavec.pythonanywhere.com/">here</a>.
				  </Col>
			  </Row>
			  <Row>
				<Col>
				 <br/>
				</Col>
			  </Row>
			  <Row>
				<Col className='col-12 col-md-6'>
					<ChartCard title={gameTitle} data={gameData} type={gameGraph}/><br/>
				</Col>
				<Col className='col-12 col-md-6'>
					<ChartCard title="Player Win Rate" data={winRateData} type='bar'/><br/>
				</Col>
			  </Row>
			  <Row>
				<Col className='col-12 col-md-6'>
					<ChartCard title={rankedTitle} data={rankedData} type='pie'/><br/>
				</Col>
				<Col className='col-12 col-md-6'>
					<br/>
				</Col>
			  </Row>
		  </Container>
		  </div>
		  );
		}
	  }
	}
;