import css from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statisticSection}>
      {title ? <h2 className={css.statisticTitle}>{title}</h2> : null}

      <ul className={css.statList}>
        {stats.map(item => {
          return (
            <li className={css.statListItem} key={item.id}>
              <span className={css.statListItemTextcontent}>{item.label}</span>
              <span className={css.statListItemTextcontent}>
                {item.percentage}%
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
