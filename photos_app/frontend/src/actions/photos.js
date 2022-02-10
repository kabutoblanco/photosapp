import { GET_PHOTOS, GET_FAVORITES, POST_PHOTO, UPDATE_PHOTO } from '../actions/types';

import api from '../services/Api';

export const getAllPhotos = () => (dispatch) => {
  api
    .getAllPhotos()
    .then((res) => {
      dispatch({
        type: GET_PHOTOS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getFavorites = () => (dispatch) => {
  api
    .getFavorites()
    .then((res) => {
      dispatch({
        type: GET_FAVORITES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const filterPhotos = (query) => (dispatch) => {
  api
    .filterPhotos(query)
    .then((res) => {
      dispatch({
        type: GET_PHOTOS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const postPhoto = (data) => (dispatch) => {
  api
    .postPhoto(data)
    .then((res) => {
      dispatch({
        type: POST_PHOTO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const patchPhoto = (data) => (dispatch) => {
  api
    .patchPhoto(data.id_unplash, data)
    .then((res) => {
      dispatch({
        type: UPDATE_PHOTO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
