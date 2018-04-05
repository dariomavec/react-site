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
		  playerData: []
		};
		this.handlePlayerChange = this.handlePlayerChange.bind(this);
	}
	
	handlePlayerChange(playerName) {
		this.setState({
		  playerName: playerName,
		  playerData: this.state.items.filter(item => item.player_tidy === playerName) 
		});
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
		const { error, isLoaded, items } = this.state;
		var rankedData, rankedTitle;
		if (error) {
		  return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
		  return <div>Loading...</div>;
		} else {
		  const barData = {
			  legend: "Win Rate",
			  x: items.map(item => item.player_tidy),
			  y: items.map(item => item.pct_win) 
			  };
			  
	      if (this.state.playerName === 'Players') {			
			  rankedData = {
				  legend: "Ranked Games",
				  x: ['Ranked', 'Unranked'],
				  y: [items.map(item => item.n_ranked).reduce((a, b) => a + b, 0), items.map(item => item.n_unranked).reduce((a, b) => a + b, 0)]
				  }; 
			  rankedTitle = "Ranked Games (Overall)";
		  }
		  else {
			  console.log(this.state.playerData);
			  
			  rankedData = {
				  legend: "Ranked Games",
				  x: ['Ranked', 'Unranked'],
				  y: [this.state.playerData[0].n_ranked, this.state.playerData[0].n_unranked]
				  };
			  rankedTitle = "Ranked Games (" + this.state.playerName + ")"
		  }
			  
		  const lineData = {
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
			 <br/>
			</Col>
		  </Row>
		  <Row>
			<Col>
				<br/>
			</Col>
			<Col>
				<ChartCard title="Player Win Rate" data={barData} type='bar'/>
			</Col>
		  </Row>
		  <Row>
			<Col>
				<br/>
			</Col>
		  </Row>
		  <Row>
		  	<Col>
				<ChartCard title={rankedTitle} data={rankedData} type='pie'/>
			</Col>
			<Col>
			</Col>
		  </Row>
		  </Container>
		  );
		}
	  }
	}
;