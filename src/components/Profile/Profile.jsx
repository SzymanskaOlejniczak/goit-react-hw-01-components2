import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  }) => {
   
    return (
        <div className={styles.profile}>
          <div className={styles.description}>
            <img
              src={avatar}
              alt={username}
              className={styles.photoAvatar}
            />
            <p className={styles.nameUser}>{username}</p>
            <p className={styles.tagUser}>@{tag}</p>
            <p className={styles.locationUser}>{location}</p>
            <ul className={styles.stats}>
              <li className={styles.itemsStats}>
                <span className={styles.spanLabel}>Followers</span>
                <span className={styles.spanQuantity}>{followers}</span>
              </li>
              <li className={styles.itemsStats}>
                <span className={styles.spanLabel}>Views</span>
                <span className={styles.spanQuantity}>{views}</span>
              </li>
              <li className={styles.itemsStats}>
                <span className={styles.spanLabel}>Likes</span>
                <span className={styles.spanQuantity}>{likes}</span>
              </li>
            </ul>
          </div>
        </div>     
    );
  }

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  };
  export default Profile