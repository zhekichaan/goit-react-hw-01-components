import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Box } from 'components/Box';

export const Statistics = ({
    stat: { label, percentage }, 
}) => {
    return (
        <StatListItem>
            <span>{label}</span>
            <span>{`${percentage}%`}</span>
        </StatListItem>
    );
};

Statistics.propTypes = {
    stat: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
}

const StatListItem = styled.li`
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