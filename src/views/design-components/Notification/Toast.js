import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Notification.css';
import {css} from 'glamor';
import {
  __ALERT_ERROR,
  __ALERT_INFO,
  __ALERT_SUCCESS,
  __ALERT_WARNING
} from '../../../helpers/colors.js';

const defaultOptions = {
  position: toast.POSITION.TOP_LEFT,
  autoClose: 10000
};

export default {
  success(msg, options = {...defaultOptions}) {
    return toast.success(msg, {
      ...options,
      className: css({
        background: __ALERT_SUCCESS
      }),
      progressClassName: '__BAR'
    });
  },
  error(msg, options = {...defaultOptions}) {
    return toast.error(msg, {
      ...options,
      className: css({
        background: __ALERT_ERROR
      }),
      progressClassName: '__BAR'
    });
  },
  info(msg, options = {...defaultOptions}) {
    return toast.info(msg, {
      ...options,
      className: css({
        background: __ALERT_INFO
      }),
      progressClassName: '__BAR'
    });
  },
  warn(msg, options = {...defaultOptions}) {
    return toast.warn(msg, {
      ...options,
      className: css({
        background: __ALERT_WARNING
      }),
      progressClassName: '__BAR'
    });
  }
};
