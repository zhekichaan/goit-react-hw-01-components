import PropTypes from 'prop-types';
import { StatList, StatListItem } from './Statistics.styled';


export const Statistics = ({ stats }) => {
    return (
    <StatList>
        {stats.map((stat) => (
            <StatListItem key={stat.id}>
                <span>{stat.label}</span>
                <span>{`${stat.percentage}%`}</span>
            </StatListItem>
        ))}
    </StatList>
    )
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}