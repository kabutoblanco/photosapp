import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

// REDUX
import { filterPhotos } from '../../actions/photos';
import { useDispatch } from 'react-redux';

function Header() {
  const [query, setQuery] = useState('');
  const history = useHistory();

  //REDUX
  const dispatch = useDispatch();

  const queryPhotos = (e) => {
    e.preventDefault();
    dispatch(filterPhotos(query));
    history.push('/');
  };

  return (
    <Navbar bg='light' expand='md'>
      <Container fluid>
        <Navbar.Brand href='#'>Photos</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href='#/home'>Home</Nav.Link>
            <Nav.Link href='#/favorites'>Favorites</Nav.Link>
          </Nav>
          <Form className='d-flex ml-2' onSubmit={queryPhotos}>
            <FormControl
              type='search'
              placeholder='Search'
              name='query'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='me-2'
              aria-label='Search'
            />
            <Button type='submit' variant='outline-success ml-1'>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
