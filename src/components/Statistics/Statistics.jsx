import PropTypes from 'prop-types';
import sass from './Statistics.module.scss';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div className={sass.statistic}>
      <ul className={sass.statList}>
        <li className={sass.statItem}>Good: {good}</li>
        <li className={sass.statItem}>Neutral: {neutral}</li>
        <li className={sass.statItem}>Bad: {bad}</li>
        <li className={sass.statItem}>Total: {totalFeedback}</li>
        <li className={sass.statItem}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
