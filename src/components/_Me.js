import React, { Component } from 'react';
import NavBar from './NavBar';
import Welcome from './Welcome';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Spacer from './Spacer';
import { Container } from 'reactstrap';

export default class Me extends Component {
	render() {
		return(
		<div className="App">		
			<NavBar links={[['About', '#about'], ['Projects', '#projects']]}/>
			<Container>
				<Welcome />	
				<Spacer id="about"/>
				<Spacer/>
				<About />
				<Spacer id="projects"/>
				<Spacer />
				<Projects />
				<Spacer />
				<Footer />
			</Container>
		</div>
	  )
	}
}
