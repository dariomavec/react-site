import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects section">
		<Container>
			<Row>
				<Col>
					<br/>
					<h1>PROJECTS</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					 <Jumbotron>
						<h1>Strife</h1>
						<h2>Insight</h2>
						<hr className="my-2" />
						<p>Dashboard for discovering gaming insights. Full stack side-project including scraping data from the <a href="https://developer.riotgames.com/">Riot API</a>, munging data, running models and presenting results.</p>
						<Button outline color="primary" href="/strife">Explore</Button>
					  </Jumbotron>
				</Col>
				<Col>
					 <Jumbotron>
						<h1>Politicks</h1>
						<h2>Game Design</h2>
						<hr className="my-2" />
						<p>Form a party, identify your key issues, make backroom deals with minor parties and lead your party to political dominance!</p>
						<Button outline color="primary" href="https://docs.google.com/document/d/1aEhwUcu31t6kzAqmpsYitgm4rvrA2UWD2BZYhVocBmE/edit?usp=sharing">Explore</Button>
					  </Jumbotron>
				</Col>
			</Row>
		</Container>
      </div>
    );
  }
}