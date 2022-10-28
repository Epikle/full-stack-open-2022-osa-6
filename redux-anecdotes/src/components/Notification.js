import { useEffect } from 'react';
import { connect } from 'react-redux';

import { resetNotification } from '../reducers/notificationReducer';

const Notification = ({ notification, resetNotification }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      resetNotification();
    }, notification.timer * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [notification, resetNotification]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  if (!notification.message) return null;
  return <div style={style}>{notification.message}</div>;
};

const mapStateProps = (state) => {
  return { notification: state.notification };
};

const mapDispatchToProps = {
  resetNotification,
};

const ConnectedNotification = connect(
  mapStateProps,
  mapDispatchToProps
)(Notification);

export default ConnectedNotification;
