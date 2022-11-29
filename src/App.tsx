import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import './App.css';
import Menu from "./containers/Menu/Menu";
import AboutMe from "./containers/AboutMe/AboutMe";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contacts from "./containers/Contacts/Contacts";
import App58 from "./containers/App58/App58";
import App59 from "./containers/App59/App59";
import App60 from "./containers/App60/src/App60";

function App() {
  return (
    <div className="App">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to={"/"} className={({ isActive }) => isActive ? 'nav-link disabled' : 'nav-link'}>Menu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/AboutMe"} className={({ isActive }) => isActive ? 'nav-link disabled' : 'nav-link'}>AboutMe</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/Portfolio"} className={({ isActive }) => isActive ? 'nav-link disabled' : 'nav-link'}>Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/Contacts"} className={({ isActive }) => isActive ? 'nav-link disabled' : 'nav-link'}>Contacts</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={(
          <Menu/>
        )}/>
        <Route path="AboutMe" element={(
          <AboutMe/>
        )}/>
        <Route path="Portfolio" element={(
          <Portfolio/>
        )}>
          <Route path="hw-58" element={(
            <div className="col-8 border mt-2">
              <App58/>
            </div>
          )}/>
          <Route path="hw-59" element={(
            <div className="col-8 border mt-2">
              <App59/>
            </div>
          )}/>
          <Route path="hw-60" element={(
            <div className="col-8 border mt-2">
              <App60/>
            </div>
          )}/>
        </Route>
        <Route path="Contacts" element={(
          <Contacts/>
        )}/>
        <Route path="*" element={(
          <h1>Not found!</h1>
        )}/>
      </Routes>
    </div>
  );
}

export default App;
