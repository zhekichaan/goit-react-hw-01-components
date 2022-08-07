import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { ProfileStat } from "../ProfileStat/ProfileStat";
import { ProfileStats, ProfileName } from './Profile.styled';

export const Profile = ({ user: { username, tag, location, avatar, stats} }) => {
    return (
        <Box width="350px" mx="auto" bg="white" borderRadius="sm" mt="50px">
            <Box display="flex" flexDirection="column" alignItems="center" height="330px" justifyContent="space-evenly">
                <img src={avatar} alt="pfp" width={200}/>
                <ProfileName>{username}</ProfileName>
                <p >{`@${tag}`}</p>
                <p>{location}</p>
            </Box>
            <ProfileStats>
                <ProfileStat text="Followers" value={stats.followers} />
                <ProfileStat text="Views" value={stats.views} />
                <ProfileStat text="Likes" value={stats.likes} />
            </ProfileStats>
        </Box>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.object.isRequired,
    }).isRequired,
};

