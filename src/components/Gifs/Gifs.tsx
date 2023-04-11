
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
    <div key={gif.id}>
      <img src={gif.url} alt={gif.title} onClick={handleClick}/>
    </div>
  );
};

export default Gif;
