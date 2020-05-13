import React from 'react';
import { Switch, Route  } from "react-router-dom";
import Home from './Home';
import About from './About';
import Travels from './Travels';
import Blog from './Blog';
import Resume from './Resume';

function RouteContainer() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/travels" component={Travels} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  )
}

export default RouteContainer;
export { default as RouteContainer } from './RouteContainer';
