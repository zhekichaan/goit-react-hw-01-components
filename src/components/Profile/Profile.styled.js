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

export const StatsWrapper = styled.li`
    padding: ${p => p.theme.space[4]}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 34%;
    border: ${p => p.theme.borders.normal};
    background-color: ${p => p.theme.colors.secondary};
`;

export const StatsAmount = styled.span`
    font-weight: ${p => p.theme.fontWeights.bold}
`