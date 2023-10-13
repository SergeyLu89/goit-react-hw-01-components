import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.tableTransactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableHeadItem}>Type</th>
          <th className={css.tableHeadItem}>Amount</th>
          <th className={css.tableHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <tr className={css.tableRow} key={id}>
              <td className={`${css.tableData} ${css.tableDataFirstItem}`}>
                {type}
              </td>
              <td className={css.tableData}>{amount}</td>
              <td className={`${css.tableData} ${css.tableDataLastItem}`}>
                {currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
