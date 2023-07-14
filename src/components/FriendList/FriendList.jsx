import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Stats } from '../Profile/Profile.styled';
import { Statis } from '../Statistics/Statistics.styled';

export default function FriendList({ friends }) {
  return (
    <Statis>
      <Stats>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </Stats>
    </Statis>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
