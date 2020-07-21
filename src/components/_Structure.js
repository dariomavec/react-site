import React, { Component } from 'react';

import NavBar from './NavBar';
import Spacer from './Spacer';
import { Container, Row, Col } from 'reactstrap';

import Gallery0 from '../gallery/0-blue-blot.png';
import Gallery1 from '../gallery/1-watercolour.png';
import Gallery2 from '../gallery/2-nebula.png';
import Gallery3 from '../gallery/3-circles.png';

/* let gallery = {
	imgs: [Gallery0, Gallery1, Gallery2, Gallery3],
	labs: ['Shatter', 'Watercolour', 'Nebula', 'Circles']
}; */

export default class Me extends Component {
	render() {
		return(
		<div className="Structure flex-container">
			<NavBar links={[['Home', '/']]}/>
			<Container>
				<Row>
					<Col className='col-12 col-md-6 structure-col'>
					Shatter
					<br/><img className='structure-img' src={Gallery0} alt="Gallery-0"></img><br/>
					Nebula
					<br/><img className='structure-img' src={Gallery2} alt="Gallery-2"></img><br/>
					</Col>
					<Col className='col-12 col-md-6 structure-col'>
					Watercolour
					<br/><img className='structure-img' src={Gallery1} alt="Gallery-1"></img><br/>
					Circles
					<br/><img className='structure-img' src={Gallery3} alt="Gallery-3"></img><br/>
					</Col>
				</Row>
				<Spacer />

			</Container>
		</div>
	  )
	}
}
