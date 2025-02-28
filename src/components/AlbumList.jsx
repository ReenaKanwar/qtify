import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Button } from "@mui/material";
import Slider from "./slider"; 

import axios from "axios";
import "../styles/Albumlist.css";

const API_TOP_ALBUMS = "https://qtify-backend-labs.crio.do/albums/top";
const API_NEW_ALBUMS = "https://qtify-backend-labs.crio.do/albums/new";
const API_SONGS = "https://qtify-backend-labs.crio.do/songs";

const AlbumList = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  
  const [showTopAlbums, setShowTopAlbums] = useState(false);
  const [showNewAlbums, setShowNewAlbums] = useState(false);
  const [showSongs, setShowSongs] = useState(false);

  useEffect(() => {
    Promise.all([
      axios.get(API_TOP_ALBUMS),
      axios.get(API_NEW_ALBUMS),
      axios.get(API_SONGS)
    ])
    .then(([topAlbumsRes, newAlbumsRes, songsRes]) => {
      console.log("Top Albums API Response:", topAlbumsRes.data);
      console.log("New Albums API Response:", newAlbumsRes.data);
      console.log("Songs API Response:", songsRes.data);
  
      setTopAlbums(topAlbumsRes.data);
      setNewAlbums(newAlbumsRes.data);
      setSongs(songsRes.data);
    })
    .catch(error => console.error("Error fetching data:", error));
  }, []);
  

  return (
    <div className="album-section">
      <AlbumBox
        title="Top Albums"
        albums={topAlbums}
        showAll={showTopAlbums}
        setShowAll={setShowTopAlbums}
      />
      <AlbumBox
        title="New Albums"
        albums={newAlbums}
        showAll={showNewAlbums}
        setShowAll={setShowNewAlbums}
      />
      <AlbumBox
        title="Songs"
        albums={songs}
        showAll={showSongs}
        setShowAll={setShowSongs}
      />
    </div>
  );
};

// AlbumBox Component
const AlbumBox = ({ title, albums, showAll, setShowAll }) => {
  console.log(`${title} Album Count:`, albums.length);

  return (
    <div className="album-box">
      <div className="album-header">
        <Typography variant="h5">{title}</Typography>
        <Button onClick={() => setShowAll(!showAll)} className="toggle-btn">
          {showAll ? "Collapse" : "Show All"}
        </Button>
      </div>
      <Slider albums={albums} />
    </div>
  );
};


// AlbumCard Component
const AlbumCard = ({ album }) => (
  <div className="album-container">
    <Card className="album-card">
      <CardMedia component="img" image={album.image} alt={album.title} className="album-image" />
      <CardContent className="card-content">
        <Chip label={`${album.follows} Follows`} className="follow-chip" />
      </CardContent>
    </Card>
    <Typography variant="h6" className="album-title">{album.title}</Typography>
  </div>
);

export default AlbumList;
