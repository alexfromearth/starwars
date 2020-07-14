import startWars from "../api/star-wars";
import { act } from "react-dom/test-utils";

// consts
let SET_INPUT = "SET_INPUT";
let SET_ID_INPUT = "SET_ID_INPUT";
let SET_SEARCH_RESULT = "SET_SEARCH_RESULT";
let SET_IS_FETCHING = "SET_IS_FETCHING";

let initialState = {
  inputText: "",
  inputId: "",
  searchResult: [],
  isFetching: false,
};

let mainReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT: {
      return { ...state, inputText: action.text };
    }
    case SET_ID_INPUT: {
      return { ...state, inputId: action.id };
    }
    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.fetchingState };
    }
    case SET_SEARCH_RESULT: {
      return {
        ...state,
        searchResult: { ...state.searchResult, ...action.obj },
      };
    }
    default:
      return state;
  }
};

//creators

export let setInput = (text) => ({ type: SET_INPUT, text });
export let setIdInput = (id) => ({ type: SET_ID_INPUT, id });
export let setSearchResult = (obj) => ({ type: SET_SEARCH_RESULT, obj });
export let setIsFetching = (fetchingState) => ({
  type: SET_IS_FETCHING,
  fetchingState,
});

export const getCharacters = (query) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    startWars
      .searchCharacters(query)
      .then((result) => {
        dispatch(setIsFetching(false));
        dispatch(setSearchResult(result.results));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default mainReduser;
