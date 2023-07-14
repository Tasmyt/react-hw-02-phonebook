import PropTypes from 'prop-types';
import { Name} from '../Profile/Profile.styled';
import { Item} from '../Statistics/Statistics.styled';
import { Avatar, Status } from './FriendList.styled';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (    
          <Item >
            <Status stat={isOnline}></Status>
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
          </Item>
  )
}

FriendListItem.propTypes = {  
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,  
};
