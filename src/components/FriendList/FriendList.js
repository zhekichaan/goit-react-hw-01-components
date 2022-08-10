import PropTypes from 'prop-types';
import { FriendsList } from "./FriendList.styled";
import { FriendListItem } from 'components/FriendsListItem/FriendListItem';


export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
            ))}
        </FriendsList>
    )
}     

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
}