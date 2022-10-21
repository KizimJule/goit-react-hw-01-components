import PropTypes from 'prop-types';
import { Section } from '../Section';
import {
  TransactionHistoryTable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <TransactionHistoryTable>
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </Thead>

        <Tbody>
          {items.map(item => (
            <Tr key={item.id}>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </Tr>
          ))}
        </Tbody>
      </TransactionHistoryTable>
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
