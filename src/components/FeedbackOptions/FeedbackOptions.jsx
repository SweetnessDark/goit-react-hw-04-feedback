import PropTypes from 'prop-types';
import sass from './FeedbackOptions.module.scss';

export const Feedback = ({ options, handleOnClick }) => {
  return (
    <div className={sass.feedbackList}>
      {options.map((option, index) => {
        const nameBtn = option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <div className={sass.btnItem} key={index}>
            <button
              type="button"
              className={sass.btn}
              onClick={() => handleOnClick(option)}
            >
              {nameBtn}
            </button>
          </div>
        );
      })}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleOnClick: PropTypes.func.isRequired,
};
