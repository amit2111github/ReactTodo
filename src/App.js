import React from "react";
import Todo from "./Todo";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

export default function App() {
  return (
    <div className=" mt-4 jumbotron container">
      <Todo />
    </div>
  );
}
