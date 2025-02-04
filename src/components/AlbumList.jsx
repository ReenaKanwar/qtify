import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";
import axios from "axios";
import "../styles/albumList.css";

const AlbumList = ({ apiUrl }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(response => {
        console.log("Fetched Albums:", response.data);
        setAlbums(response.data);
      })
      .catch(error => console.error("Error fetching albums:", error));
  }, [apiUrl]);

  return (
    <div className="album-grid">
      {albums.length > 0 ? (
        albums.map(album => (
          <Card key={album.id} className="album-card">
            <CardMedia component="img" image={album.image} alt={album.title} className="album-image" />
            <CardContent className="card-content">
              <Chip label={`${album.follows} Follows`} className="chip" />
              <Typography variant="h6" className="album-title">
                {album.title}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>Loading albums...</p>
      )}
    </div>
  );
};

export default AlbumList;
