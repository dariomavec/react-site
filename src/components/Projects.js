import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

class Projects extends Component {
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
						<h1 className="display-3">League Tracker</h1>
						<h2>How does my tribe match up on the Rift?</h2>
						<hr className="my-2" />
						<p>Dashboard for discovering gaming insights. Full stack development project scraping data from Riot API, munging data, running models and presenting results.</p>
						<p className="lead">
						  <Button color="primary">Explore</Button>
						</p>
					  </Jumbotron>
				</Col>
			</Row>
		</Container>
      </div>
    );
  }
}

export default Projects;