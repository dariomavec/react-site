import React from 'react';
import PersonalPage from './components/_PersonalPage';
import Tracker from './components/_Tracker';
import './App.css'
import { Switch, Route } from 'react-router-dom';

const App = () => (
	<div>
	<Switch>
      <Route exact path='/' component={PersonalPage}/>
      <Route exact path='/tracker' component={Tracker}/>
    </Switch>
	</div>
)

export default App