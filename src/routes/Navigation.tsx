import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import reactlogo from '../assets/react.svg'
// import { routes } from "./Routes";
import { Suspense } from "react";
import { routes } from "./routes";

export const  Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> } >
      <Router>
        <div className="main-layout" >
          <nav>
              <img src={ reactlogo } alt="react-logo" />
            <ul>
              {
                routes.map(({ path, name }) => (
                  <li key={ path } >
                    <NavLink 
                      activeClassName='nav-active' 
                      to={ path } 
                    >
                        { name }
                    </NavLink>
                  </li>
                ) )
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {
              routes.map(({ path, component: Component }) => (
                <Route
                  key={ path }
                  path={ path } 
                  component={ () => (
                    <Component />
                  ) }  
                />
              ))
            }
          </Switch>

            <Redirect to={ routes[0].path } />

        </div>
      </Router>
    </Suspense>
  );
}