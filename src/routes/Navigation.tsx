import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import reactlogo from '../assets/react.svg'

export const  Navigation = () => {
  return (
    <Router>
      <div className="main-layout" >
        <nav>
            <img src={ reactlogo } alt="react-logo" />
          <ul>
            <li>
              <NavLink activeClassName='nav-active' to="/" exact >Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName='nav-active' to="/about" exact >About</NavLink>
            </li>
            <li>
              <NavLink activeClassName='nav-active' to="/users" exact >Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" >
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}