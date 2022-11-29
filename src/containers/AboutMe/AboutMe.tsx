import React from 'react';
import {Link} from "react-router-dom";

const AboutMe = () => {
  return (
    <div>
      <p>Всем привет! Меня зовут Азамат.</p>
      <button type="button" className="btn btn-primary ms-2">
        <Link to="/" className="list-group-item list-group-item-action">В меню</Link>
      </button>
    </div>
  );
};

export default AboutMe;