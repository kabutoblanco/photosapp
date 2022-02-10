import React from 'react';

import { Col, Card as Card_ } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router-dom';

// REDUX
import { patchPhoto, postPhoto } from '../../actions/photos';
import { useDispatch } from 'react-redux';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Card(props) {
  // REDUX
  const dispatch = useDispatch();
  const history = useHistory();

  const { photo } = props;

  const viewDetail = () => {
    history.push('detail/' + photo.id_unplash);
  };

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
        <LazyLoadImage
          className='card-img-top'
          src={photo.preview}
          placeholderSrc={photo.preview}
          effect='blur'
          onClick={viewDetail}
        />
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
