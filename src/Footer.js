import "./styles.css";
import React from "react";

export default function Footer() {
  return (
    <p className="footer">
      This is an{" "}
      <a
        href="https://github.com/LeckieKristy/react-app-weather"
        target="_blank"
      >
        {" "}
        Open-sourced Code{" "}
      </a>{" "}
      from{" "}
      <a href="https://github.com/LeckieKristy" target="_blank">
        Kristy Leckie
      </a>
    </p>
  );
}
