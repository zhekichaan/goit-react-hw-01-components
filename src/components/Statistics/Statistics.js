import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { StatList, StatListItem, StatsTitle } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
    return (
        <Box mt="40px" display="flex" flexDirection="column" alignItems="center">
            {title && <StatsTitle>{title}</StatsTitle>}
            <StatList>
                {stats.map(({ id, label, percentage }) => (
                    <StatListItem key={id}>
                        <span>{label}</span>
                        <span>{`${percentage}%`}</span>
                    </StatListItem>
                ))}
            </StatList>
        </Box>
    )
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
    title: PropTypes.string,
}

