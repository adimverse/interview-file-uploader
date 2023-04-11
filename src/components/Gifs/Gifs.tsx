
import { Grid } from "@mui/material";
import React from "react";

interface Props {
  gif: Gif;
  onAddToFavorites: (gif: Gif) => void;
}

const Gif: React.FC<Props> = ({ gif, onAddToFavorites }) => {
  const handleClick = () => {
    onAddToFavorites(gif);
  };

  return (
    <Grid item xs={4} >
    <div key={gif.id} style={{width:'200px'}}>
      <img src={gif.url} alt={gif.title} onClick={handleClick} style={{maxWidth: '100%', height: 'auto'}}/>
    </div>
    </Grid>
  );
};

export default Gif;
