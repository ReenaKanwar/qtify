import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Button } from "@mui/material";
import axios from "axios";
import "../styles/Albumlist.css";

const API_TOP_ALBUMS = "https://qtify-backend-labs.crio.do/albums/top";
const API_NEW_ALBUMS = "https://qtify-backend-labs.crio.do/albums/new";

// Add comment to push

const AlbumList = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [showTopAlbums, setShowTopAlbums] = useState(false);
  const [showNewAlbums, setShowNewAlbums] = useState(false);
  const [showSongs, setShowSongs] = useState(false);

  useEffect(() => {
    axios.get(API_TOP_ALBUMS)
      .then(response => setTopAlbums(response.data))
      .catch(error => console.error("Error fetching top albums:", error));

    axios.get(API_NEW_ALBUMS)
      .then(response => setNewAlbums(response.data))
      .catch(error => console.error("Error fetching new albums:", error));

    axios.get(API_TOP_ALBUMS) // Just for demo, using top albums as songs
      .then(response => setSongs(response.data))
      .catch(error => console.error("Error fetching songs:", error));
  }, []);

  return (
    <div className="album-section">
      
      {/* Top Albums */}
      <div className="album-box">
        <div className="album-header">
          <h2>Top Albums</h2>
          <Button 
            onClick={() => setShowTopAlbums(!showTopAlbums)}
            className="toggle-btn"
          >
            {showTopAlbums ? "Collapse" : "Show All"}
          </Button>
        </div>
        <div className={`album-grid ${showTopAlbums ? "expanded" : "collapsed"}`}>
          {topAlbums.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>

      {/* New Albums */}
      <div className="album-box">
        <div className="album-header">
          <h2>New Albums</h2>
          <Button 
            onClick={() => setShowNewAlbums(!showNewAlbums)}
            className="toggle-btn"
          >
            {showNewAlbums ? "Collapse" : "Show All"}
          </Button>
        </div>
        <div className={`album-grid ${showNewAlbums ? "expanded" : "collapsed"}`}>
          {newAlbums.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>

      {/* Songs */}
      <div className="album-box">
        <div className="album-header">
          <h2>Songs</h2>
          <Button 
            onClick={() => setShowSongs(!showSongs)}
            className="toggle-btn"
          >
            {showSongs ? "Collapse" : "Show All"}
          </Button>
        </div>
        <div className={`album-grid ${showSongs ? "expanded" : "collapsed"}`}>
          {songs.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
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
// dummy testvhbjmvk,
