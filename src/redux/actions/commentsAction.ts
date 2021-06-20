import axios from "axios";
import { Dispatch } from "redux";
import {
  fetchComments,
  fetchCommentsError,
  fetchCommentsSuccess,
} from "../reducers/commentsReducer";

const commentsAction = (limit: number = 3) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(fetchComments());
    await axios
      .get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`)
      .then((res) => dispatch(fetchCommentsSuccess(res.data)))
      .catch((err) => dispatch(fetchCommentsError("Было ошибка")));
  };
};

export default commentsAction;
