import React from 'react';

import { Container } from 'react-bootstrap';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/layout/Header';
import List from '../components/photo/List';

function Routing(props) {
  return (
    <Router>
      <Header />
      <Container fluid className='py-4'>
        <Switch>
          <Route exact path={['/', '/home']} render={() => <List type={true} />} />
          <Route exact path='/favorites' render={() => <List type={false} />} />
        </Switch>
      </Container>
    </Router>
  );
}

export default Routing;
