import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import commentsReducer from "./reducers/commentsReducer";
import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({
    post: postReducer,
    comments: commentsReducer
})
export type RootState = ReturnType<typeof rootReducer>
const store = createStore(rootReducer,applyMiddleware(thunk)) 

export default store