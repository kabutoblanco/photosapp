import { GET_PHOTOS, GET_FAVORITES, POST_PHOTO, UPDATE_PHOTO } from '../actions/types';

const initialState = {
  photos: [],
  favorites: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case POST_PHOTO:
      const photos_1 = state.photos.map((item) => {
        if (item.id_unplash === action.payload.id_unplash) return { ...action.payload };
        return item;
      });
      return {
        ...state,
        favorites: [action.payload].concat(state.favorites),
        photos: photos_1,
      };
    case UPDATE_PHOTO:
      const photos_2 = state.photos.map((item) => {
        if (item.id_unplash === action.payload.id_unplash) return { ...action.payload };
        return item;
      });
      const favorites = state.favorites.filter((item) => item.id_unplash != action.payload.id_unplash);
      return {
        ...state,
        favorites: favorites,
        photos: photos_2,
      };
    default:
      return state;
  }
}
