import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { ProfileStats, ProfileName, StatsWrapper, StatsAmount } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    const {followers, views, likes} = stats
    return (
        <Box width="350px" mx="auto" bg="white" borderRadius="sm" mt="50px">
            <Box display="flex" flexDirection="column" alignItems="center" height="330px" justifyContent="space-evenly">
                <img src={avatar} alt="pfp" width={200}/>
                <ProfileName>{username}</ProfileName>
                <p >{`@${tag}`}</p>
                <p>{location}</p>
            </Box>
            <ProfileStats>
                <StatsWrapper>
                    <p>Followers</p>
                    <StatsAmount>{followers}</StatsAmount>
                </StatsWrapper>
                <StatsWrapper>
                    <p>Views</p>
                    <StatsAmount>{views}</StatsAmount>
                </StatsWrapper>
                <StatsWrapper>
                    <p>Likes</p>
                    <StatsAmount>{likes}</StatsAmount>
                </StatsWrapper>
            </ProfileStats>
        </Box>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};

