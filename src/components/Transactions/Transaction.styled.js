import styled from 'styled-components';

export const TransactionWrapper = styled.table`
    margin: 50px auto 30px;
    width: 720px;
    border: ${p => p.theme.borders.normal};
    text-align: center;
    border-collapse: collapse;
`

export const TableData = styled.td`
    background-color: ${p => p.theme.colors.white};
    padding: 8px;
    border: ${p => p.theme.borders.normal};
    &::first-letter {
        text-transform:capitalize;
    }
`

export const TableHeadRow = styled.th`
    background-color: ${p => p.theme.colors.primary};
    padding: 8px;
    border: ${p => p.theme.borders.normal};
`