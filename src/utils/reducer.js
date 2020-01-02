import {
  POST_REGISTER_START,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILURE
} from "../utils/actions";

const initialState = {
  chefInfo: {
    full_name: "",
    location: "",
    phone: "",
    email: "",
    username: "",
    password: ""
  },
  isFetching: false,
  error: "",
  recipes: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTER_START:
      return {
        ...state,
        chefInfo: action.payload,
        isFetching: true
      };
    case POST_REGISTER_SUCCESS:
      return {
        ...state,
        chefInfo: action.payload,
        isFetching: false,
        error: ""
      };
    case POST_REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};
