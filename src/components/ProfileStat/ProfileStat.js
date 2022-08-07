import PropTypes from 'prop-types';
import { StatsWrapper, StatsAmount } from './ProfileStat.styled'

export const ProfileStat = ({text, value}) => {
    return (
        <StatsWrapper>
            <p>{text}</p>
            <StatsAmount>{value}</StatsAmount>
        </StatsWrapper>
    );
};

ProfileStat.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  };