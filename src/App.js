import React from 'react';
import { Home } from './pages/Home';
import { Converter } from './pages/Converter';
import { Route, Switch } from 'react-router-dom';
import { Header } from './Header';
import 'antd/dist/antd.css'
import './App.scss';

const App = () => {

  return (
    <>
    <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/converter" component={Converter} />
      </Switch>
    </>
  );
}

export default App;
