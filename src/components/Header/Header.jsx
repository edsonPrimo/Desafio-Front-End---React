import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg'

import Profile from './Profile';

import './style.scss'

function Header() {
  return (

    <header className="header flex">
      <Link to="#" className="header__link">
        <h1 className="header__titulo">
          <img src={logo} className="header__logo" alt="Logo da Alura Dev"/>
        </h1>
      </Link>
      <input className="header__search input" placeholder="Busque algo" type="text"/>
      <Profile/>

    </header>
  );
}

export default Header