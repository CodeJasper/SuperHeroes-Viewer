import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

export default function Loading() {
  return (
    <>
      <div className="container-loading">
        <ReactLoading
          type="balls"
          color={"rgb(73, 73, 230)"}
          height={"5%"}
          width={"5%"}
        />
      </div>
    </>
  );
}
