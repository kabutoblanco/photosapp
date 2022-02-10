import { GET_PHOTOS, GET_FAVORITES, POST_PHOTO, UPDATE_PHOTO, GET_PHOTO } from './types';
import { ACTION_RUNNING, ACTION_END } from './types';

import { createMessage, returnErrors } from './messages';

import api from '../services/Api';

export const resetPhoto = () => (dispatch) => {
  dispatch({
    type: GET_PHOTO,
    payload: null,
  });
};

export const getPhoto = (id) => (dispatch) => {
  dispatch({ type: ACTION_RUNNING });
  api
    .getDetailPhoto(id)
    .then((res) => {
      dispatch({
        type: GET_PHOTO,
        payload: res.data,
      });
      dispatch({ type: ACTION_END });
    })
    .catch((err) => console.log(err));
};

export const getAllPhotos = () => (dispatch) => {
  dispatch({ type: ACTION_RUNNING });
  api
    .getAllPhotos()
    .then((res) => {
      dispatch({
        type: GET_PHOTOS,
        payload: res.data,
      });
      dispatch({ type: ACTION_END });
    })
    .catch((err) => console.log(err));
};

export const getFavorites = () => (dispatch) => {
  dispatch({ type: ACTION_RUNNING });
  api
    .getFavorites()
    .then((res) => {
      dispatch({
        type: GET_FAVORITES,
        payload: res.data,
      });
      dispatch({ type: ACTION_END });
    })
    .catch((err) => console.log(err));
};

export const filterPhotos = (query) => (dispatch) => {
  dispatch({ type: ACTION_RUNNING });
  api
    .filterPhotos(query)
    .then((res) => {
      dispatch({
        type: GET_PHOTOS,
        payload: res.data,
      });
      dispatch({ type: ACTION_END });
      dispatch(createMessage({ addSale: 'Success search' }));
    })
    .catch((err) => console.log(err));
};

export const postPhoto = (data) => (dispatch) => {
  dispatch({ type: ACTION_RUNNING });
  api
    .postPhoto(data)
    .then((res) => {
      dispatch({
        type: POST_PHOTO,
        payload: res.data,
      });
      dispatch(getPhoto(data.id_unplash));
      dispatch({ type: ACTION_END });
      dispatch(createMessage({ addSale: 'Marked as favorite' }));
    })
    .catch((err) => console.log(err));
};

export const patchPhoto = (data) => (dispatch) => {
  dispatch({ type: ACTION_RUNNING });
  api
    .patchPhoto(data.id_unplash, data)
    .then((res) => {
      dispatch({
        type: UPDATE_PHOTO,
        payload: res.data,
      });
      dispatch(getPhoto(data.id_unplash));
      dispatch({ type: ACTION_END });
      dispatch(createMessage({ addSale: 'Unmarked as favorite' }));
    })
    .catch((err) => console.log(err));
};
