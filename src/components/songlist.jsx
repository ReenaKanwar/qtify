import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import axios from "axios";
import "../styles/SongsList.css";

const SongsList = ({ apiUrl }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("Songs API Data:", response.data);
        setSongs(response.data);
      })
      .catch((error) => console.error("Error fetching songs:", error));
  }, [apiUrl]);

  return (
    <div className="songs-list-container">
      {songs.length > 0 ? (
        <List className="songs-list">
          {songs.map((song) => (
            <ListItem key={song.id} className="song-item">
              <ListItemText primary={song.title} secondary={`Artist: ${song.artist}`} />
              <IconButton className="play-btn" onClick={() => alert(`Playing: ${song.title}`)}>
                <PlayArrow />
              </IconButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>Loading songs...</p>
      )}
    </div>
  );
};

export default SongsList;
