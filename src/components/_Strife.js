import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChartCard from './ChartCard';
import PlayerDropdown from './PlayerDropdown';


export default class Strife extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  items: [],
		  playerName: 'Players',
		  playerData: null
		};
		this.handlePlayerChange = this.handlePlayerChange.bind(this);
	}
	
	handlePlayerChange(playerName) {
		this.setState({
		  playerName: playerName,
		  playerData: this.state.items.filter(item => item.player_tidy === playerName) 
		});
		console.log(this.state.playerData);
	}
	
	componentDidMount() {
		fetch("http://localhost:8080/players.json")
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
		const { error, isLoaded, items } = this.state;
		if (error) {
		  return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
		  return <div>Loading...</div>;
		} else {
		  const data = {
			  legend: "Win Rate",
			  x: items.map(item => item.player_tidy),
			  y: items.map(item => item.pct_win) 
			  };
			
		  return (
		  <Container className="flex-container">
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
		  </Row>
		  <Row>
			<Col>
				<ChartCard title="Dashboard" data={data}/>
			</Col>
		  </Row>
		  <Row>
			<Col>
				<ChartCard title="Dashboard" data={data}/>
			</Col>
		  </Row>
		  </Container>
		  );
		}
	  }
	}
;