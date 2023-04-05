import PropTypes from 'prop-types';
import sass from './NotificationMessage.module.scss';

const Notification = ({ message }) => {
  return <span className={sass.notifiMessage}>{message}</span>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
