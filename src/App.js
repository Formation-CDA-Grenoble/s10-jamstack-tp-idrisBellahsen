import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage,RestaurantPage } from './pages';

const App = () =>
<BrowserRouter>
<Switch>
  <Route exact path='/' component={HomePage} />
  <Route exact path='/restaurant/:slug' component={RestaurantPage} />

</Switch>
</BrowserRouter>
;

export default App;
