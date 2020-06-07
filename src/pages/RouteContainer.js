import React from 'react';
import { CSSTransition  } from 'react-transition-group';
import { Route  } from 'react-router-dom';
import { routes } from '../global';

function RouteContainer() {
  return (
    <div className="container">
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  )
}

export default RouteContainer;
