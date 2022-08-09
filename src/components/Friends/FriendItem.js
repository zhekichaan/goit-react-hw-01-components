import PropTypes from 'prop-types';
import { FrindsItemWrapper, OnlineIcon, OfflineIcon } from './FriendsList.styled';
import { FriendsList } from "./FriendsList.styled";


export const Friends = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <FrindsItemWrapper key={id}>
                    {isOnline ? <OnlineIcon /> : <OfflineIcon />}
                    <img src={avatar} width="50px" alt='User avatar' />
                    <p>{name}</p>
                </FrindsItemWrapper>
            ))}
        </FriendsList>
    )
}     

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired,
}