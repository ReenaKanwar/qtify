import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchResults from "./components/Searchresult";
import Home from "./Home";
import AlbumList from "./components/AlbumList";  

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Home />
            <AlbumList apiUrl="https://qtify-backend-labs.crio.do/albums/top" /> 
          </>} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
