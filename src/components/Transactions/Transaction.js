import PropTypes from 'prop-types';
import styled from 'styled-components';
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