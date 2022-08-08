import PropTypes from 'prop-types';
import { TableData } from './Transaction.styled';
import { TransactionWrapper, TableHeadRow } from "./Transaction.styled";

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionWrapper>
            <thead>
                <tr>
                    <TableHeadRow>Type</TableHeadRow>
                    <TableHeadRow>Amount</TableHeadRow>
                    <TableHeadRow>Currency</TableHeadRow>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <TableData>
                        {item.type}
                    </TableData>
                    <TableData>{item.amount}</TableData>
                    <TableData>{item.currency}</TableData>
              </tr>
                ))}
            </tbody>
        </TransactionWrapper>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
};

