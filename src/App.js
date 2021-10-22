import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageView from './PageViews/HomePage';
import GamePageView from './PageViews/GamePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <HomePageView />} />
        <Route path="/:id" render={() => <GamePageView />} />
      </Switch>
    </Router>
  );
};

export default App;
