import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar, Name } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendItem>
    <Status status={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </FriendItem>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
