import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Download.module.scss';
import Button from '../Button';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import DownloadForMobile from './DownloadForMobile';
import { LaptopIcon, MobileIcon } from '../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faLaptop } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
const cx = classNames.bind(styles);

function Download() {
  const [state, setState] = useState('0');
  const [stateOption, setStateOption] = useState('');
  const onClickHandle = (e) => {
    if (stateOption !== 'laptop') {
      setState('1');
    }
  };
  const onClickCloseHandle = () => {
    setState('0');
    setStateOption('');
  };
  const onClickLaptopHandle = () => {
    setStateOption('laptop');
    setState('0');
  };
  const onClickMobileHandle = () => {
    setStateOption('mobile');
    setState('0');
  };
  const onClickCloseDownloadHandle = () => {
    setStateOption('');
    setState('0');
  };
  const onClickCloseDowloadInLaptopHandle = () => {
    setStateOption('');
  };
  return (
    <div className={cx('wrapper')}>
      {state === '0' ? (
        <Button className={cx('wrapper-button')} onClick={(e) => onClickHandle(e)}>
          Tải ứng dụng
        </Button>
      ) : (
        ''
      )}
      {stateOption === 'mobile' ? (
        <div className={cx('wrapper-downloadMobile')}>
          <DownloadForMobile onClickClose={onClickCloseDownloadHandle} />
        </div>
      ) : stateOption === 'laptop' ? (
        <div className={cx('wrapper_laptop')}>
          <span className={cx('title_laptop')}>Cài đặt ứng dụng </span>
          <div className={cx('wrapper_InfoIcon')}>
            <Image
              className={cx('logo_tiktok_laptop')}
              alt="logo-tiktok"
              src="data:image/png;base64,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"
            />
            <div className={cx('wrapper_title')}>
              <p className={cx('title_name')}>TikTok</p>
              <p className={cx('title_link')}>tiktok.com</p>
            </div>
          </div>
          <div className={cx('wrapper_button_laptop')}>
            <Button onClick={() => onClickCloseDowloadInLaptopHandle()} className={cx('button_laptop')}>
              Huỷ
            </Button>
            <Button className={cx('button_laptop')}>Cài đặt</Button>
          </div>
        </div>
      ) : state === '1' ? (
        <div className={cx('wrapper-mobile')}>
          <div className={cx('wrapper-device', 'device-laptop')}>
            <FontAwesomeIcon className={cx('device-icon device-computer')} icon={faLaptop} />
            <span onClick={() => onClickLaptopHandle()} className={cx('download-title')}>
              Tải TikTok dành cho máy tính để bàn
            </span>
            <span onClick={() => onClickCloseHandle()} className={cx('icon-clear')}>
              &times;
            </span>
          </div>
          <div onClick={() => onClickMobileHandle()} className={cx('wrapper-device')}>
            <MobileIcon className={cx('device-icon')} />
            <span className={cx('download-title')}>Tải ứng dụng TikTok</span>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Download;
