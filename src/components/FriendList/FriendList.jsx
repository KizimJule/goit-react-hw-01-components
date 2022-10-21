import PropTypes from 'prop-types';
import { Section } from '../Section';
import { FriendListItem } from './FriendListItem';
import { FriendListContainer } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <Section>
    <FriendListContainer>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        ></FriendListItem>
      ))}
    </FriendListContainer>
  </Section>
);

FriendList.propTypes = {
  children: PropTypes.node,
};
