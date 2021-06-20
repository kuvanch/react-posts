import React, { useEffect, useState } from "react";
import Posts from "./components/Posts";
import "./App.css";
import Comments from "./components/Comments";
import { useDispatch, useSelector } from "react-redux";
import postAction from "./redux/actions/postAction";
import { RootState } from "./redux";
import commentsAction from "./redux/actions/commentsAction";

function App() {
  const [limit, setLimit] = useState(6);
  const dispatch = useDispatch();
  const { post } = useSelector((state: RootState) => state.post);
  useEffect(() => {
    dispatch(postAction());
    dispatch(commentsAction());
  }, []);
  const onToggleMore = () => {
    setLimit(limit + 3);
    dispatch(commentsAction(limit));
  };
  return (
    <div className="container">
      <Posts title={post.title} body={post.body}>
        <button onClick={onToggleMore} className="btn primary">
          Load more
        </button>
      </Posts>
      <Comments />
    </div>
  );
}

export default App;
