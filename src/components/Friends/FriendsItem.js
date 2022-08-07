import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FrindsItemWrapper, OnlineIcon, OfflineIcon } from './FriendsList.styled';

export const FriendsItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <FrindsItemWrapper>
            {isOnline ? <OnlineIcon /> : <OfflineIcon />}
            <img src={avatar} width="50px" alt='User avatar' />
            <p>{name}</p>
        </FrindsItemWrapper>
    );
};

FriendsItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};