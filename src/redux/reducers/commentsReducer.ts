interface commentsState {
  comments: any[];
  loading: boolean;
  error: string;
}
interface commentsAction {
  type: string;
  payload?: any;
}

const FETCH_COMMENTS = "FETCH_COMMENTS";
const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
const FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR";

const initialState: commentsState = {
  comments: [],
  loading: false,
  error: "",
};

const commentsReducer = (state = initialState, action: commentsAction) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { loading: true, error: "", comments: [] };
    case FETCH_COMMENTS_SUCCESS:
      return { loading: false, error: "", comments: action.payload };
    case FETCH_COMMENTS_ERROR:
      return { loading: false, error: action.payload, comments: [] };
    default:
      return state;
  }
};

export default commentsReducer;

export const fetchComments: any = (payload: commentsAction) => ({
  type: FETCH_COMMENTS,
  payload,
});
export const fetchCommentsSuccess: any = (payload: commentsAction) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload,
});
export const fetchCommentsError: any = (payload: commentsAction) => ({
  type: FETCH_COMMENTS_ERROR,
  payload,
});
