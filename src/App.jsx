import React from "react";
import Page from "./Components/Page";
import "./styles.css";

export default function App() {
  const isDev = import.meta.env.DEV;

  return (
    <div className="bg-container">
      {/* Only used in development */}
      {isDev && (
        <div className="env-message">
          <h1>{import.meta.env.VITE_SECRET_MESSAGE}</h1>
        </div>
      )}
      <Page />
    </div>
  );
}
