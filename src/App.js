import React from 'react';
import Me from './components/_Me';
import Strife from './components/_Strife';
import './App.css'
import { Switch, Route } from 'react-router-dom';

const App = () => (
	<div>
	<Switch>
      <Route exact path='/' component={Me}/>
      <Route exact path='/strife' component={Strife}/>
    </Switch>
	</div>
);

export default App;