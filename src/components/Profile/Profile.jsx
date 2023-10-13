import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.profileImg} src={avatar} alt="User avatar" />
        <h2 className={css.name}>{username}</h2>
        <p className={css.profileDescr}>{tag}</p>
        <p className={css.profileDescr}>{location}l</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileListItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.profileListItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
