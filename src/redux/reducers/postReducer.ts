interface postState {
  post: any[];
  loading: boolean;
  error: string;
}
interface postAction {
  type: string;
  payload?: any;
}

const FETCH_POST = "FETCH_POST";
const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
const FETCH_POST_ERROR = "FETCH_POST_ERROR";

const initialState: postState = {
  post: [],
  loading: false,
  error: "",
};

const postReducer = (state = initialState, action: postAction) => {
  switch (action.type) {
    case FETCH_POST:
      return { loading: true, error: "", post: [] };
    case FETCH_POST_SUCCESS:
      return { loading: false, error: "", post: action.payload };
    case FETCH_POST_ERROR:
      return { loading: false, error: action.payload, post: [] };
    default:
      return state;
  }
};

export default postReducer;

export const fetchPost: any = (payload: postAction) => ({
  type: FETCH_POST,
  payload,
});
export const fetchPostSuccess: any = (payload: postAction) => ({
  type: FETCH_POST_SUCCESS,
  payload,
});
export const fetchPostError: any = (payload: postAction) => ({
  type: FETCH_POST_ERROR,
  payload,
});
