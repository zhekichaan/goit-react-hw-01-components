import PropTypes from 'prop-types';
import { TableData } from './Transaction.styled';

export const Transaction = ({ item: { type, amount, currency, } }) => {
    return (
        <tr>
            <TableData>
                {type}
            </TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
        </tr>
    )
}

Transaction.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
};