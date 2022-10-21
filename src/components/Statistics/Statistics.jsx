import PropTypes from 'prop-types';
import { Section } from '../Section';
import css from './Statistics.module.css';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}
export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <div className={css.statisticsContainer}>
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map(stat => (
            <li
              className="item"
              style={{
                backgroundColor: getRandomHexColor(),
              }}
              key={stat.id}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

// Statistics.propTypes = {
//   statisticsData: PropTypes.exact({
//     title: PropTypes.string.isRequired,
//     stats: PropTypes.exact({
//       id: PropTypes.number,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number,
//     }),
//   }),
// };
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
