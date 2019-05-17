import { TOGGLE_SHOWING, SET_OPENED_PLACE, GET_OPENED_PLACE, GET_MAP } from '../actions/types';

const initialState = {
  isShowing: 'none',
  openedPlace: {},

  // For initial map position
  sfPosition : {
    lat: 37.775,
    lng: -122.410
  },
  zoom: 12.5,
  map: {}
}

export default ( state = initialState, action ) => {
  switch( action.type ) {
    case TOGGLE_SHOWING:
      return {
        ...state,
        isShowing: action.payload
      }
    
    case SET_OPENED_PLACE:
      return {
        ...state,
        openedPlace: action.payload
      }

    case GET_OPENED_PLACE:
      return {
        ...state,
        openedPlace: action.payload
      }
    /*case GET_MAP:
      return {
        ...state,
        map: action.payload
      }*/
    default: 
      return state;
  }
}