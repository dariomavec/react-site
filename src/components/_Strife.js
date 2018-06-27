import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChartCard from './ChartCard';
import PlayerDropdown from './PlayerDropdown';
import NavBar from './NavBar';
import LoadingSpinner from './LoadingSpinner';
//import _ from 'lodash';

function roundWeek(d) {
  let dCopy = new Date(d);
  let monthDay = dCopy.getDate();
  let diff = monthDay - dCopy.getDay();
  dCopy.setDate(diff)
  return new Date(dCopy.getFullYear(), 
				  dCopy.getMonth(),
				  dCopy.getDate());
}

function roundMonth(d) {
  let dCopy = new Date(d);
  
  return new Date(dCopy.getFullYear(), 
				  dCopy.getMonth(),
				  1);
}

function sumByGroup(groupingData, groupFeature, sumFunction) {
	let groupedData = groupingData.reduce((result, item) => {
		(result[item[groupFeature]]) ? result[item[groupFeature]] += sumFunction(item) : result[item[groupFeature]] = sumFunction(item);
		return result
		}, []);
	console.log(groupedData);
	return Object.keys(groupedData).map(i => groupedData[i])	
}

export default class Strife extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  playerLoading: true,
		  player: {name: 'Players'},
		  gameLoaded: false,
		  gameLoading: false,
		  game: {}
		};
		this.handlePlayerChange = this.handlePlayerChange.bind(this);
		this.baseURL = "https://mavec.pythonanywhere.com/";
		//this.baseURL = "http://localhost:8080/";
	}
	
	handlePlayerChange(playerName) {		
		let player = this.state.player;
		
		player.name = playerName;
		player.filteredData = this.state.player.allData.filter(item => item.player_name === playerName);
		player.rankedGames = {
			legend: "Ranked Games",
			x: ['Ranked', 'Unranked'],
			y: [player.filteredData[0].n_ranked, player.filteredData[0].n_unranked]
		};
		
		this.setState({
			player,
			gameLoading: true
		});
				
		fetch(this.baseURL + "games.json/?player__player_name=" + playerName.toLowerCase())
		  .then(res => res.json())
		  .then(
			(result) => {
			  let game = {}	
			
			  game.allData = result.map(i => i.game);
			  // Parse dates
			  game.allData.forEach(obj => {
				obj.timestamp = Date.parse(obj.timestamp);
				obj.weekstamp = Date.parse(roundWeek(obj.timestamp)));
				obj.monthstamp = Date.parse(roundMonth(obj.timestamp)));
			  });
			  game.allData = game.allData.sort((a, b) => a.timestamp - b.timestamp);
			  
			  // Monthly data aggregation
			  game.monthlyData = {}
			  game.monthlyData.monthstamp = game.allData.map(i => i.monthstamp).filter((v, i, a) => a.indexOf(v) === i);
			  game.monthlyData.n_wins = sumByGroup(game.allData, 'monthstamp', (item) => item['game_outcome']);
			  game.monthlyData.n_games = sumByGroup(game.allData, 'monthstamp', () => 1);
			  game.monthlyData.pct_win = game.monthlyData.n_games.map((item, idx) => Math.round(100 * game.monthlyData.n_wins[idx] / game.monthlyData.n_games[idx]));
			  
			  this.setState({
				gameLoaded: true,
				gameLoading: false,
				game
			  });
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  this.setState({
				gameLoaded: false,
				gameLoading: false,
				error
			  });
			}
		  )
	}
	
	componentDidMount() {
		this.setState({
			playerLoading: true
		});
		
		fetch(this.baseURL + "players.json")
		  .then(res => res.json())
		  .then(
			(result) => {
			  result.forEach(obj => obj.player_name = obj.player_name[0].toUpperCase() + obj.player_name.slice(1))
			  
			  let player = this.state.player;
			  
			  player.allData = result;
			  player.winRate = {
				  legend: "Win Rate",
				  x: result.map(item => item.player_name),
				  y: result.map(item => item.pct_win) 
				  };
			  player.numberGames = {
				  legend: "# Games",
				  x: result.map(item => item.player_name),
				  y: result.map(item => item.n_games) 
				  };
			  player.rankedGames = {
				  legend: "Ranked Games",
				  x: ['Ranked', 'Unranked'],
				  y: [result.map(item => item.n_ranked).reduce((a, b) => a + b, 0), result.map(item => item.n_unranked).reduce((a, b) => a + b, 0)]
				  };					  
			  
			  this.setState({
				player,
				playerLoading: false
			  });
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  this.setState({
				playerLoading: false,
				error
			  });
			}
		  )
 
	  }

	render() {
		const { error, playerLoading, player, gameLoading, gameLoaded, game } = this.state;
		let rankedTitle, gameData, gameGraph, gameTitle;
		if (error) {
		  return <div>Error: {error.message}</div>;
		}
		else if (playerLoading) {
		  return (
		  <div className="Structure">
			<NavBar links={[['Home', '/']]}/>	
			<Container>
			  <LoadingSpinner/>
			</Container>
		  </div>
		  );
		}
	    else {		  
		
		// Ranked Games
		this.state.player.name === 'Players' ? rankedTitle = "Ranked Games (Overall)" : rankedTitle = "Ranked Games (" + player.name + ")";

		// Game data
		if (gameLoaded) {
		  gameData = {
			  legend: "Win Rate",
			  x: game.monthlyData.monthstamp,
			  y: game.monthlyData.pct_win,
			  z: game.monthlyData.n_games
		  };
		  gameGraph = 'line';
		  gameTitle = "Monthly Stats (" + player.name + ")"
		}
		else {
		  gameTitle = "Select a player to see game data"
		}
			  			
		return (
		<div className="Structure">
		<NavBar links={[['Home', '/']]}/>	
		<Container>
		  <Row className="align-items-center" style={{paddingBottom: '10px'}}>
			  <Col>
			    {playerLoading ? '' :
				<PlayerDropdown 
					players={player.allData.map(item => item.player_name)} 
					name={player.name}
					onDropdownChange={this.handlePlayerChange}/>}	
			  </Col>
			  <Col>
			  Check out the REST API <a href="http://mavec.pythonanywhere.com/">here</a>.
			  </Col>
		  </Row>
		  <Row>
			<ChartCard title={gameTitle} data={gameData} type={gameGraph} loading={gameLoading}/>
			<ChartCard title="Player Win Rate" data={player.winRate} type='bar' loading={playerLoading}/>
		  </Row>
		  <Row>
			<ChartCard title={rankedTitle} data={player.rankedGames} type='pie' loading={playerLoading}/>
			<ChartCard title="Number of Games" data={player.numberGames} type='bar' loading={playerLoading}/>
		  </Row>  
		</Container>
		</div>
		);
		}
	  }
	}
;


