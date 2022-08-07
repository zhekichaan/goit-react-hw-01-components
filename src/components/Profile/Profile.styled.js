import styled from 'styled-components';

export const ProfileStats = styled.ul`
    padding: 0px;
    list-style: none;
    display: flex;
    justify-content: center;
`

export const ProfileName = styled.p`
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.l}
`;