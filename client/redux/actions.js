import axios from 'axios';
import { SET_CAMPUSES, SELECT_CAMPUS, ADD_CAMPUS } from './constants';

// ACTION CREATORS

export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses
  }
};

export const selectCampus = (campus) => {
  return {
    type: SELECT_CAMPUS,
    campus
  }
};

export const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    campus
  }
};

// THUNK CREATORS

export const fetchCampuses = () => {
  return async(dispatch) => {
    const response = await axios.get('/api/campuses');
    const campuses = response.data;
    const action = setCampuses(campuses);
    dispatch(action);
  }
};

export const postCampus = () => {
  //your code here
  return async(dispatch) => {
    const response = await axios.post('/api/campuses');
    const campus = response.data;
    const action = addCampus(campus);
    dispatch(action);
  }
};
