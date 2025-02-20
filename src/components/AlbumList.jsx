import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Button } from "@mui/material";
import axios from "axios";
import "../styles/Albumlist.css";

const AlbumList = ({ apiUrl }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(response => {
        console.log("Album API Data:", response.data);
        setAlbums(response.data);
      })
      .catch(error => console.error("Error fetching albums:", error));
  }, [apiUrl]);

  return (
    <div className="album-section">
      <div className="album-grid">
        {albums.length > 0 ? (
          albums.slice(0, showAll ? albums.length : 4).map(album => (
            <div key={album.id} className="album-container">
              <Card className="album-card">
                <CardMedia component="img" image={album.image} alt={album.title} className="album-image" />
                <CardContent className="card-content">
                  <Chip label={`${album.follows} Follows`} className="follow" />
                </CardContent>
              </Card>

              
              <Typography variant="h6" className="album-title">
                {album.title}
              </Typography>
            </div>
          ))
        ) : (
          <p>Loading albums...</p>
        )}
      </div>

      {/* Show All / Collapse Button */}
      {albums.length > 4 && (
        <Button onClick={() => setShowAll(!showAll)} variant="contained" className="show-all-button">
          {showAll ? "Collapse" : "Show All"}
        </Button>
      )}
    </div>
  );
};

export default AlbumList;
