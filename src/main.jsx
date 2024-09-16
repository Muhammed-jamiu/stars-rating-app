import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./starRating/Style.css";
import StarRating from "./starRating/StarRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating />
  </StrictMode>
);
