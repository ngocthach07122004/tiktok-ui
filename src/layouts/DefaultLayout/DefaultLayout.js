import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import SideBar from '../components/SideBar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('sideBar')}>
          <SideBar />
        </div>
        <div className={cx('content')}>{children} </div>
      </div>
    </div>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node,
};
export default DefaultLayout;
