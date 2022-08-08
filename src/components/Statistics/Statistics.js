import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { StatList, StatListItem } from './Statistics.styled';


export const Statistics = ({ stats }) => {
    return (
        <Box>
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
}