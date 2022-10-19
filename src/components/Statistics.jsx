import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statisticsData: PropTypes.exact({
    title: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      id: PropTypes.number,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    }),
  }),
};
