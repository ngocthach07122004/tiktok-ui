import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountItemPreview.module.scss';

const cx = classNames.bind(styles);

function AccountItemPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://cdn.mozart.edu.vn/wp-content/uploads/2024/05/hinh-anh-hot-girl-de-thuong-nhat.webp"
          alt="girl"
        />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </header>
      <div className={cx('body')}>
        <h4 className={cx('nickName')}>
          <strong> lhnguyetminh</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <p className={cx('name')}>Lê Hồ Nguyệt Minh</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>1.2M </strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>20.2M </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}
AccountItemPreview.propsTypes = {};

export default AccountItemPreview;
