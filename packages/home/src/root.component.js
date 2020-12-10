import React from "react";

export default function Root(props) {
  return (
    <section style={{ textAlign: "center", padding: "1rem" }}>
      {props.name} is mounted!
    </section>
  );
}
