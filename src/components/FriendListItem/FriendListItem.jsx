import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline}) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.statusOnline : styles.statusOffline}>{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="70" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendListItem