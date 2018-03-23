import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects section">
		<Container>
			<Row>
				<Col>
					<h2><br/>PROJECTS</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					 <Jumbotron>
						<h2>League Tracker</h2>
						<h3>How does my tribe match up on the Rift?</h3>
						<hr className="my-2" />
						<p>Dashboard for discovering gaming insights. Full stack development project scraping data from Riot API, munging data, running models and presenting results.</p>
						<p>
						  <Button color="primary" href="/tracker">Explore</Button>
						</p>
					  </Jumbotron>
				</Col>
			</Row>
		</Container>
      </div>
    );
  }
}