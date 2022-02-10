import React, { useEffect } from 'react';

import { Row } from 'react-bootstrap';
import Card from './Card';

// REDUX
import { getAllPhotos, getFavorites } from '../../actions/photos';
import { useDispatch, useSelector } from 'react-redux';

function List(props) {
  const { type } = props;

  // REDUX
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const favorites = useSelector((state) => state.photos.favorites);

  useEffect(() => {
    document.title = type ? 'Electronika | Home' : 'Electronika | Favorites';
  }, [type]);

  useEffect(() => {
    dispatch(getAllPhotos());
    dispatch(getFavorites());
  }, []);

  return (
    <Row xs={1} md={2} lg={4} className='g-4'>
      {(type ? photos : favorites).map((item, _) => (
        <Card key={_} photo={item} />
      ))}
      {(type ? photos : favorites).length === 0 ? <span className='text-warning'>Not found photos favorites</span> : null}
    </Row>
  );
}

export default List;
