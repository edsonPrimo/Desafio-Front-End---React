import React from 'react';
import '../src/styles/global.scss'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Menu from './components/MenuNav/Menu';
import EditCode from './pages/EditCodePage/EditCodePage';

function App() {
  return (
    <Router>
      <section className="body">
        <Header />
          <main className="main">
            <Menu/>
            <Switch>
              <Route exact path="/">
                <EditCode  />
      
              </Route>



            </Switch>


            
          </main>
      </section>
    </Router>
  );
}

export default App;
