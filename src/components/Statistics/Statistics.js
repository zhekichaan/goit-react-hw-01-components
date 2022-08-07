import PropTypes from 'prop-types';
import { StatListItem } from './Statistics.styled';


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

