import PropTypes from 'prop-types';
import { Section } from '../Section';
import { FriendListItem } from './FriendListItem';
import css from './Friend.module.css';

export const FriendList = ({ friends }) => (
  <Section>
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        ></FriendListItem>
      ))}
    </ul>
  </Section>
);

FriendList.propTypes = {
  children: PropTypes.node,
};
