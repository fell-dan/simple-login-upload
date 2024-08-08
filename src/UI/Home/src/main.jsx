import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home.jsx";
import "./home.scss";

exports.handler = async (event) => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));
  return createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Home />
    </StrictMode>
  );
};
