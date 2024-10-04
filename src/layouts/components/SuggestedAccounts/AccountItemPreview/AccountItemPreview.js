import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountItemPreview.module.scss';
import AccountPreview from '../../AccountPreview';

const cx = classNames.bind(styles);

function AccountItemPreview() {
  return <AccountPreview />;
}
AccountItemPreview.propsTypes = {};

export default AccountItemPreview;
