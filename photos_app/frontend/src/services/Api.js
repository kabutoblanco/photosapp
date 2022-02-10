import https from './ApiConfig';

const getDetailPhoto = (id) => {
  return https.get('api/photo/self/' + id + '/');
};

const getAllPhotos = () => {
  return https.get('api/photo/all');
};

const getFavorites = () => {
  return https.get('api/photo/');
};

const filterPhotos = (query) => {
  return https.get('api/photo/all/' + query + '/');
};

const postPhoto = (data) => {
  return https.post('api/photo/', data);
};

const patchPhoto = (id, data) => {
  return https.patch('api/photo/' + id + '/', data);
};

const apis = {
  getDetailPhoto,
  getAllPhotos,
  getFavorites,
  filterPhotos,
  postPhoto,
  patchPhoto,
};

export default apis;
