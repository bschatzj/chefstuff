import { axiosWithAuth } from "../utils/axiosWithAuth";
export const POST_REGISTER_START = "POST_REGISTER_START";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_FAILURE = "POST_REGISTER_FAILURE";

export const postChefInfo = info => dispatch => {
  dispatch({ type: POST_REGISTER_START, payload: info });
  console.log(info);
  axiosWithAuth()
    .post("/login/register", info)
    .then(res => {
      dispatch({ type: POST_REGISTER_SUCCESS, payload: info });
      console.log(`this is the response ${res.data.token}`);
    })
    .catch(err => {
      dispatch({ type: POST_REGISTER_FAILURE, payload: err.response });
    });
};
