import React from "react";

export default function Loader(props) {
  return (
    <div className="loader" aria-busy="true" aria-label="Loading...">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
