import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Button } from "@mui/material";
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
      setTopAlbums(topAlbumsRes.data);
      setNewAlbums(newAlbumsRes.data);
      setSongs(songsRes.data);
    })
    .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="album-section">
      {/* Top Albums */}
      <AlbumBox
        title="Top Albums"
        albums={topAlbums}
        showAll={showTopAlbums}
        setShowAll={setShowTopAlbums}
      />

      {/* New Albums */}
      <AlbumBox
        title="New Albums"
        albums={newAlbums}
        showAll={showNewAlbums}
        setShowAll={setShowNewAlbums}
      />

      {/* Songs */}
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
  const visibleAlbums = showAll ? albums : albums.slice(0, 7); 

  return (
    <div className="album-box">
      <div className="album-header">
        <h2>{title}</h2>
        <Button 
          onClick={() => setShowAll(!showAll)}
          className="toggle-btn"
        >
          {showAll ? "Collapse" : "Show All"}
        </Button>
      </div>
      <div className={`album-grid ${showAll ? "expanded" : "collapsed"}`}>
        {visibleAlbums.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

// AlbumCard Component
const AlbumCard = ({ album }) => (
  <div className="album-container">
    <Card className="album-card">
      <CardMedia component="img" image={album.image} alt={album.title} className="album-image" />
      <CardContent className="card-content">
        <Chip label={`${album.follows} Follows`} className="follow" />
      </CardContent>
    </Card>
    <Typography variant="h6" className="album-title">{album.title}</Typography>
  </div>
);

export default AlbumList;
