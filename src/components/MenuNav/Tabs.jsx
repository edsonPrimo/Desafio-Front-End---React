import React from 'react';
import { FaUsers } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Tabs() {
  return (
    <nav className="menu__tab tab flex flex--coluna">
      <NavLink exact to="/" className="tab__link flex" activeClassName="tab__link--active">
        <div className="tab__link__icone"><FaCode /></div>
        <p className="tab__link__texto">Editor de código</p>
      </NavLink>
      <NavLink to="/comunidade" className="tab__link flex" activeClassName="tab__link--active">
        <div className="tab__link__icone"><FaUsers /></div>
        <p className="tab__link__texto">Comunidade</p>
      </NavLink>
    </nav>
  )
}

export default Tabs