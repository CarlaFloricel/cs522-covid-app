import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/homepage/homepage.component';
import Activities from './components/activities/activities.component';
import Vaccines from './components/vaccines/vaccines.component';
import Faq from './components/faq/faq.component';
import Map from './components/map/map.component';
import Header from './components/header/header.component';
import AboutProject from './components/about_project/about_project.component';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  console.log('main app', this)
  return (
    <div className="App">
      <Route component={Header}></Route>
      <Switch>
        <Route exact path='/cs522-covid-app/home' component={HomePage}></Route>
        <Route exact path='/cs522-covid-app/map' component={Map}></Route>
        <Route exact path='/cs522-covid-app/vaccines' component={Vaccines}></Route>
        <Route exact path='/cs522-covid-app/activities' component={Activities}></Route>
        <Route exact path='/cs522-covid-app/faq' component={Faq}></Route>
        <Route exact path='/cs522-covid-app' component={AboutProject}></Route>
      </Switch>

    </div>
  );
}

export default App;

