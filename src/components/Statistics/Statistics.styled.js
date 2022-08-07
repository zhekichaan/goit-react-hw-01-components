import styled from 'styled-components';

export const StatisticsWrapper = styled.ul`
    display: flex;
    margin-left: auto;
    // margin-right: auto;
    // width: 300px;
    padding: 0px;
    // marin-top: 50px; 
    margin: 50px auto 0px;
    justify-content: center;
    list-style: none;
`

export const StatListItem = styled.li`
    background-color: ${p => p.theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center;
    justify-content: center;
    // padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
    width: 100px;
    height: 80px;
    border: ${p => p.theme.borders.normal}
`