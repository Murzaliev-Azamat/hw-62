import React from 'react';
import {Link} from "react-router-dom";

const Contacts = () => {
  return (
    <div>
      <p>Мои контакты: 0999 999 999 azamat92@bk.ru</p>
      <button type="button" className="btn btn-primary ms-2">
        <Link to="/" className="list-group-item list-group-item-action">В меню</Link>
      </button>
    </div>
  );
};

export default Contacts;