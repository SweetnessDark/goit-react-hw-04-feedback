import PropTypes from 'prop-types';
import sass from './NotificationMessage.module.scss';

export const Notification = ({ message }) => {
  return <span className={sass.notifiMessage}>{message}</span>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
