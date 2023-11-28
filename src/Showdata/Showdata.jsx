import React from "react";
import "./Showdata.css";
const Showdata = ({ item }) => {
  const { id, title, name } = item;

  return (
    <div className="card">
      <h4>Id :{id}</h4>
      <p>Title :{title}</p>
      <h4>{name}</h4>
    </div>
  );
};

export default Showdata;
