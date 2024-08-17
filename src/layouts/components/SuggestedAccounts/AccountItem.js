import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItemPreview from './AccountItemPreview';

const cx = classNames.bind(styles);
function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountItemPreview />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy interactive delay={[1000, 400]} offset={[-20, 5]} render={renderPreview} placement="bottom">
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://cdn.mozart.edu.vn/wp-content/uploads/2024/05/hinh-anh-hot-girl-de-thuong-nhat.webp"
            alt="girl"
          />
          <div className={cx('item-info')}>
            <h4 className={cx('nickName')}>
              <strong> lhnguyetminh</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <p className={cx('name')}>Lê Hồ Nguyệt Minh</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}
AccountItem.propTypes = {};

export default AccountItem;
