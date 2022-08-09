import styled from 'styled-components';

export const StatList = styled.ul`
    display: flex;
    margin-left: auto;
    // margin-right: auto;
    width: 500px;
    padding: 0px;
    margin: 0px auto;
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
    border: ${p => p.theme.borders.normal};
`

export const StatsTitle = styled.h2`
    width: 500px;
    border: ${p => p.theme.borders.normal};
    padding: ${p => p.theme.space[5]}px;
    text-align: center;
    background-color: ${p => p.theme.colors.white}
`