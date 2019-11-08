import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Homepage from './Homepage';
import Store from './Store';
import Landingpage from './Landingpage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (    
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
        <Route path ="/" exact component={Landingpage}/>
        <Route path ="/Store" component={Store}/>
        <Route path ="/Homepage" component={Homepage}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
