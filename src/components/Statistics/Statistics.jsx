import PropTypes from 'prop-types';
import { Section } from '../Section';
import {
  StatisticsContainer,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}
export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <StatisticsContainer>
        {title && <Title>{title}</Title>}
        <StatList>
          {stats.map(stat => (
            <Item key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </Item>
          ))}
        </StatList>
      </StatisticsContainer>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
