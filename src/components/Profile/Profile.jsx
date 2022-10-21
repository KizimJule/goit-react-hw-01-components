import PropTypes from 'prop-types';
import { Section } from '../Section';
import {
  Wrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Stats,
  Stat,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Section>
      <Wrapper>
        <Description>
          <Avatar src={avatar} alt="User avatar" />
          <Name>{username}</Name>
          <Tag>{tag}</Tag>
          <Tag>{location}</Tag>
        </Description>

        <Stats>
          <Stat>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </Stat>
          <Stat>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </Stat>
          <Stat>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </Stat>
        </Stats>
      </Wrapper>
    </Section>
  );
};

Profile.propTypes = {
  profilerData: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
