export const FriendListItem = ({ avatar, name, isOnline}) => {
    const statusBg = isOnline? '#2d940d':'#e32d20';
    const statusStyle = {backgroundColor: statusBg};
  return (
    <li className="item" style={statusStyle}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
