import PropTypes from 'prop-types';
import { Head, Info, Transaction, BoxTable } from './TransactionHistory.styled';
export default function TransactionHistory({ items }) {
  return (
    <BoxTable>
    <Transaction>
  <thead>
    <tr>
      <Head>Type</Head>
      <Head>Amount</Head>
      <Head>Currency</Head>
    </tr>
  </thead>

  <tbody>
{ items.map(({id, type, amount, currency}) => (
    <tr key={id}>
      <Info>{type}</Info>
      <Info>{amount}</Info>
      <Info>{currency}</Info>
    </tr>
))}
  </tbody>
      </Transaction>
      </BoxTable>
  );
}

TransactionHistory.propTypes = {
  
  items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};