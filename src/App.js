// src/App.js
import React from "react";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchResults from "./components/search result";
import Home from "../src/Home";


const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
  
    { path: "/search", element: <SearchResults /> },
  ]);

  return (
    <div>
      <Navbar />
      {routes}
    </div>
  );
};

export default App;
