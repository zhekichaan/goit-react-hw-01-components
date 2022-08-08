import PropTypes from 'prop-types';
import { FrindsItemWrapper, OnlineIcon, OfflineIcon } from './FriendsList.styled';
import { FriendsList } from "./FriendsList.styled";


export const FriendsItem = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(friend => (
                <FrindsItemWrapper key={friend.id}>
                    {friend.isOnline ? <OnlineIcon /> : <OfflineIcon />}
                    <img src={friend.avatar} width="50px" alt='User avatar' />
                    <p>{friend.name}</p>
                </FrindsItemWrapper>
            ))}
        </FriendsList>
    )
}     

FriendsItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
}