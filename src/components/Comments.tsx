import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

function Comments() {
  const { comments, error, loading } = useSelector(
    (state: RootState) => state.comments
  );

  console.log(error);

  if (loading) {
    return <div className="loader"></div>;
  }
  if (error) {
    return <div className="card">{error}</div>;
  }
  return (
    <div className="card">
      <h2>Комментария</h2>
      {comments.map((item: any) => {
        return (
          <ul className="list" key={item.id}>
            <hr />
            <li className="list-item">{item.email}</li>
            <li className="list-item">{item.body}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Comments;
