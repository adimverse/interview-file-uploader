import React from "react";
import styles from './Favorites.module.css';

interface Props {
  favorites: Gif[];
}

const Favorites: React.FC<Props> = ({ favorites }) => {
  return (
    <>
      <div className={styles.profile}>
      <div className={styles.profileImage}>
      {favorites.map((favorite) => (
        <div key={favorite.id} style={{width:'200px'}}>
          <img src={favorite.url} alt={favorite.title} style={{maxWidth: '100%', height: 'auto'}}/>
        </div>
      ))}
      </div>
      <div className={styles.profileUserSettings}>
        <h1 className={styles.profileUserName}>Xander Rybalov</h1>
        <button className={styles.profileEditBtn}>Edit Profile</button>
      </div>
      </div>
    </>
  );
};

export default Favorites;
