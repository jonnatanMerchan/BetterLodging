/* eslint-disable no-multi-assign */
/* eslint-disable import/prefer-default-export */
export const addRoom = payload => ({
  type: 'ADD_TO_ROOM',
  payload,
});
export const deleteRoom = payload => ({
  type: 'DELETE_TO_ROOM',
  payload,
});
export const searchVideo = (payload) => ({
  type: 'SEARCH_VIDEO',
  payload,
});

export const detailRoom = (payLoad) => ({
  type: 'DETAIL_ROOM',
  payLoad,
  });

export const loginRequest = (payLoad) => (
  {
 type:'LOGIN_REQUEST',
  payLoad,
});

