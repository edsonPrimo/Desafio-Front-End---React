import React from 'react';
import Tabs from './Tabs';
import './style.scss'

function Menu() {
  return (
    <section className="menu">
      <h2 className="menu__titulo">Menu</h2>
      <div className="menu__tab">
        <Tabs />
      </div>
    </section>
  )
}

export default Menu