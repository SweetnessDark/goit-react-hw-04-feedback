import PropTypes from 'prop-types';
import sass from './Section.module.scss';

export const Section = ({ title, children }) => {
  return (
    <>
      {title && <h2 className={sass.h2}>{title}</h2>}
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
