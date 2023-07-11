import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import reactlogo from '../assets/react.svg'
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const  Navigation = () => {
  return (
    <Router>
      <div className="main-layout" >
        <nav>
            <img src={ reactlogo } alt="react-logo" />
          <ul>
            <li>
              <NavLink activeClassName='nav-active' to="/lazy1" exact >Lazy 1</NavLink>
            </li>
            <li>
              <NavLink activeClassName='nav-active' to="/lazy2" exact >Lazy 2</NavLink>
            </li>
            <li>
              <NavLink activeClassName='nav-active' to="/lazy3" exact >Lazy 3</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/lazy1" >
            <LazyPage1 />
          </Route>
          <Route path="/lazy2">
            <LazyPage2 />
          </Route>
          <Route path="/lazy3">
            <LazyPage3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}