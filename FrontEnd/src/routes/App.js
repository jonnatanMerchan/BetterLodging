import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import DetailRoom from '../containers/DetailRoom';
import NotFound from '../containers/NotFound';
import Layout from "../components/Layout";
import Login from "../containers/Login";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path="/detailRoom" component={DetailRoom} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
