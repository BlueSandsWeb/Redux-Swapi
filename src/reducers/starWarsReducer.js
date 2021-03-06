import { FETCHING_CHARACTERS, FETCHING_CHARACTERS_SUCCESS, FETCHING_CHARACTERS_FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: '',
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      return {
        ...state,
        fetching: true,
      }
      case FETCHING_CHARACTERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: '',
        characters: [...state.characters, ...action.payload]
      }
      case FETCHING_CHARACTERS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
