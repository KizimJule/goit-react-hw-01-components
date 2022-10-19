import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <section className="section-friends">
      <ul className="friend-list">
        {friends.map(friend => (
          <li key={friend.id} className="item">
            <span className="status">{friend.isOnline}</span>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  statisticsData: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
