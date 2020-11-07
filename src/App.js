import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/homepage/homepage.component';
import Activities from './components/activities/activities.component';
import Vaccines from './components/vaccines/vaccines.component';
import Faq from './components/faq/faq.component';
import Map from './components/map/map.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div className="App">
       <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/map' component={Map}></Route>
        <Route exact path='/vaccines' component={Vaccines}></Route>
        <Route exact path='/activities' component={Activities}></Route>
        <Route exact path='/faq' component={Faq}></Route>
      </Switch>

    </div>
  );
}

export default App;

