import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusBg = isOnline ? ' #2d940d' : ' #e32d20';
  const statusStyle = { backgroundColor: statusBg };
  return (
    <li className={css.friendListItem}>
      <span style={statusStyle} className={css.friendStatus}></span>
      <img
        className={css.friendAvatar}
        src={avatar}
        alt="User avatar"
        width="50"
      />
      <p className={css.friendName}>{name}</p>
    </li>
  );
};
