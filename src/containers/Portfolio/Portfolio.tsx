import React from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="row">
      <div className="col-2">
       <div className="list-group m-2 text-center">
         <button onClick={() => navigate('hw-58')} type="button" className="list-group-item list-group-item-action list-group-item-info">hw-58 (Modal + alerts)</button>
         <button onClick={() => navigate('hw-59')} type="button" className="list-group-item list-group-item-action list-group-item-warning">hw-59 (Movie + jokes)</button>
         <button onClick={() => navigate('hw-60')} type="button" className="list-group-item list-group-item-action list-group-item-info">hw-60 (Chat on React)</button>
       </div>
       <button type="button" className="btn btn-primary ms-2">
         <Link to="/" className="list-group-item list-group-item-action">В меню</Link>
       </button>
      </div>

        <Outlet/>

    </div>
  );
};

export default Portfolio;