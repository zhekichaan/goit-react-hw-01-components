import { FrindsItemWrapper, OnlineIcon, OfflineIcon } from '../FriendList/FriendList.styled';

export const FriendListItem = ({isOnline, avatar, name}) => {
    return (
        <FrindsItemWrapper>
            {isOnline ? <OnlineIcon /> : <OfflineIcon />}
            <img src={avatar} width="50px" alt='User avatar' />
            <p>{name}</p>
        </FrindsItemWrapper>
    )
}
    
        
