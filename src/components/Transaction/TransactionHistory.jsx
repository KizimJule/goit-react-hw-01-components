import PropTypes from 'prop-types';
import { Section } from '../Section';
import {} from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
};

TransactionHistory.propTypes = {
  transactionData: PropTypes.exact({
    id: PropTypes.number,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
