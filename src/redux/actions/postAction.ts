import axios from "axios";
import { Dispatch } from "redux";
import {
  fetchPost,
  fetchPostError,
  fetchPostSuccess,
} from "../reducers/postReducer";

const postAction = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(fetchPost());
    await axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => dispatch(fetchPostSuccess(res.data)))
      .catch((err) => dispatch(fetchPostError("Было ошибка")));
  };
};

export default postAction;
