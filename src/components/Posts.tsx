import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
interface IPosts {
  title: string;
  body: string;
}
const Posts: FC<IPosts> = ({ title, body, children }) => {
  const { error, loading } = useSelector((state: RootState) => state.post);
  if (loading) {
    return <div className="loader"></div>;
  }
  if (error) {
    return <div className="card">{error}</div>;
  }
  return (
    <div className="card">
      <h2>{title}</h2>
      <hr />
      <p>{body}</p>
      <hr />
      {children}
    </div>
  );
};

export default Posts;
