import React, { useEffect, useState } from 'react';

import { ListGroup } from 'react-bootstrap';

import { Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useParams } from 'react-router-dom';

import api from '../../services/Api';

// REDUX
import { getPhoto, patchPhoto, postPhoto, resetPhoto } from '../../actions/photos';
import { useDispatch, useSelector } from 'react-redux';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Detail() {
  let { id } = useParams();

  // REDUX
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.photos.photo);
  const isRunning = useSelector((state) => state.utils.isRunning);

  const [srcPhoto, setSrcPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (photo)
      api.getPhoto(photo.urls.regular).then((res) => {
        setSrcPhoto(
          'data:' +
            res.headers['content-type'] +
            ';base64,' +
            Buffer.from(res.data, 'binary').toString('base64')
        );
        setIsLoading(false);
      });
  }, [photo]);

  useEffect(() => {
    dispatch(getPhoto(id));
  }, [id]);

  useEffect(() => {
    return () => {
      dispatch(resetPhoto());
    };
  }, []);

  const addFavorite = () => {
    const data = {
      id_unplash: photo.id,
      preview: photo.urls.small,
      favorite: true,
    };
    dispatch(postPhoto(data));
  };

  const updatePhoto = () => {
    const data = {
      id_unplash: photo.id,
      favorite: false,
    };
    dispatch(patchPhoto(data));
  };

  return (
    <Row className='g-4'>
      <Col xs={12} md={8}>
        <LazyLoadImage
          className='detail'
          effect='blur'
          src={photo && !isRunning && !isLoading ? srcPhoto : '/static/frontend/img/loading.gif'}
          placeholderSrc='/static/frontend/img/loading.gif'
          width='100%'
        />
        <div className='favorite' style={{ right: '28px' }}>
          <img
            onClick={photo && photo.favorite ? updatePhoto : addFavorite}
            src={
              photo && photo.favorite
                ? '/static/frontend/img/star_1.png'
                : '/static/frontend/img/star_2.png'
            }
            alt=''
            width='50'
            height='50'
          />
        </div>
      </Col>
      <Col xs={12} md={4}>
        <div className='custom-container p-2'>
          <div className='user-info mb-2'>
            <div className='d-flex justify-content-center m-2'>
              <LazyLoadImage
                className='user-profile'
                src={photo && photo.user.profile_image.large}
                height='150px'
                effect='blur'
                placeholderSrc={photo && photo.user.profile_image.large}
                style={{ borderRadius: '50px' }}
              />
            </div>
            <ListGroup>
              <ListGroup.Item>
                User: {(photo && photo.user.first_name) + ' ' + (photo && photo.user.last_name)}
              </ListGroup.Item>
              <ListGroup.Item>Location: {photo && photo.user.location}</ListGroup.Item>
            </ListGroup>
          </div>
          <div className='image-info'>
            <ListGroup>
              <ListGroup.Item>Date: {photo && photo.created_at}</ListGroup.Item>
              <ListGroup.Item>Likes: {photo && photo.likes}</ListGroup.Item>
              <ListGroup.Item>Description: {photo && photo.description}</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Detail;
