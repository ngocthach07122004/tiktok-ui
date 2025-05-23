import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
function MenuItem({ title, to, solidIcon, regularIcon }) {
  return (
    <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
      <span className={cx('solid-icon')}>{solidIcon} </span>
      <span className={cx('regular-icon')}>{regularIcon} </span>
      <span className={cx('title')}> {title} </span>
    </NavLink>
  );
}
MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  solidIcon: PropTypes.node,
  regularIcon: PropTypes.node,
};
export default MenuItem;
