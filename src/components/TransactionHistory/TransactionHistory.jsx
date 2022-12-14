import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistoryTable}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={styles.trColumn} key={id}>
              <th className={styles.tdString}>{type}</th>
              <th className={styles.tdString}>{amount}</th>
              <th className={styles.tdString}>{currency}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.prototype = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
export default TransactionHistory