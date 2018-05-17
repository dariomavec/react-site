import React from 'react';
import Me from './components/_Me';
import Strife from './components/_Strife';
import Structure from './components/_Structure';
import './App.css';
import { Switch, Route } from 'react-router-dom';

export default () => (
	<Switch>
      <Route exact path='/' component={Me}/>
      <Route exact path='/strife' component={Strife}/>
	  <Route exact path='/structure' component={Structure}/>
    </Switch>
);