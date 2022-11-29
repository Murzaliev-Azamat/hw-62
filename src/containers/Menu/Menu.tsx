import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div className="list-group m-2 text-center" style={{width: '300px'}}>
        <Link to="AboutMe" className="list-group-item list-group-item-action list-group-item-info">Обо мне</Link>
        <Link to="Portfolio" className="list-group-item list-group-item-action list-group-item-warning">Портфолио</Link>
        <Link to="Contacts" className="list-group-item list-group-item-action list-group-item-info">Контакты</Link>
      </div>
    </div>
  );
};

export default Menu;