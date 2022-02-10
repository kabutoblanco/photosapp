import React from 'react';

import { Col, Card as Card_ } from 'react-bootstrap';

// REDUX
import { patchPhoto, postPhoto } from '../../actions/photos';
import { useDispatch } from 'react-redux';

function Card(props) {
  // REDUX
  const dispatch = useDispatch();

  const { photo } = props;

  const addFavorite = () => {
    const data = {
      id_unplash: photo.id_unplash,
      preview: photo.preview,
      favorite: true,
    };
    dispatch(postPhoto(data));
  };

  const updatePhoto = () => {
    const data = {
      id_unplash: photo.id_unplash,
      favorite: false,
    };
    dispatch(patchPhoto(data));
  };

  return (
    <Col>
      <Card_ className='my-2 center'>
        <Card_.Img variant='top' src={photo.preview} width={160} />
        <div className='favorite'>
          <img
            onClick={photo.favorite ? updatePhoto : addFavorite}
            src={
              photo.favorite ? '/static/frontend/img/star_1.png' : '/static/frontend/img/star_2.png'
            }
            alt=''
            width='50'
            height='50'
          />
        </div>
      </Card_>
    </Col>
  );
}

export default Card;
