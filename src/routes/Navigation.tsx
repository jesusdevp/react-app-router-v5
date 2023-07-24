import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import reactlogo from '../assets/react.svg'
import '../03-forms/styles/styles.css'
import { FormikAbstract, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from "../03-forms/pages";

export const  Navigation = () => {
  return (
    <Router>
      <div className="main-layout" >
        <nav>
            <img src={ reactlogo } alt="react-logo" />
          <ul>
            <li>
              <NavLink activeClassName='nav-active' to="/register" exact >Register Page</NavLink>
            </li>
            <li>
              <NavLink activeClassName='nav-active' to="/formik-basic" exact >Formik Page</NavLink>
            </li>
            <li>
              <NavLink activeClassName='nav-active' to="/formik-yup" exact >Formik Yup</NavLink>
            </li>
            <li>
              <NavLink activeClassName='nav-active' to="/formik-components" exact >Formik Components</NavLink>
            </li>
            <li>
              <NavLink activeClassName='nav-active' to="/formik-abstract" exact >Formik Abstract</NavLink>
            </li>
            <li>
              <NavLink activeClassName='nav-active' to="/users" exact >Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/formik-basic" >
           <FormikBasicPage />
          </Route>
          <Route path="/formik-yup" >
           <FormikYupPage />
          </Route>
          <Route path="/formik-components" >
           <FormikComponents />
          </Route>
          <Route path="/formik-abstract" >
           <FormikAbstract />
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/register">
            {/* <h1>Home</h1> */}
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}