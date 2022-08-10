import styled from 'styled-components';

export const FriendsList = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding: 0px;
    justify-content: center;
    margin: 50px auto 0px;
    gap: 20px;
    list-style: none;
`

export const FrindsItemWrapper = styled.li`
    display: flex;
    align-items: center;
    gap: 16px;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.md};
    padding: ${p => p.theme.space[3]}px;
    background-color: ${p => p.theme.colors.white};
`;

export const OnlineIcon = styled.span`
    background-color: green;
    border-radius: 50%;
    width: 16px;
    height: 16px;
`;

export const OfflineIcon = styled.span`
    background-color: red;
    border-radius: 50%;
    width: 16px;
    height: 16px;
`;