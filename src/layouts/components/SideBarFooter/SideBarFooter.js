import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SideBarFooter.module.scss';
import MoreInfo from './MoreInfo';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './SideBarFooter.css';
const cx = classNames.bind(styles);
const listInfo = [
  {
    nameField: 'company',
    field: ['Giới thiệu', 'Bản tin', 'Liên hệ', 'Sự nghiệp'],
  },
  {
    nameField: 'program',
    field: [
      'TikTok for good',
      'Quảng cáo',
      'Tiktok LIKE Creator Networks',
      'Deveploper',
      'Minh mạch',
      'Phần thưởng trên TikTok',
      'TikTok Embeds',
    ],
  },
  {
    nameField: 'policy',
    field: ['Trợ giúp', 'An toàn', 'Điều khoản', 'Chính sách Quyền riêng tư', 'Creator Academy', 'Hướng dẫn Cộng đồng'],
  },
];

function SideBarFooter() {
  const [stateInfo, setStateInfo] = useState('0');
  const handleOnclick = (stateKey, stateValue) => {
    if (stateKey === stateValue) {
      return setStateInfo('0');
    } else {
      return setStateInfo(stateValue);
    }
  };
  return (
    <div className={cx('wrapper')}>
      <div>
        <h4 className={cx('title')} onClick={() => handleOnclick(stateInfo, '1')}>
          Công ty
        </h4>
        {stateInfo === '1' && <MoreInfo data={listInfo[0].field} />}
        <h4 className={cx('title')} onClick={() => handleOnclick(stateInfo, '2')}>
          Chương trình
        </h4>
        {stateInfo === '2' && <MoreInfo data={listInfo[1].field} />}
        <h4 className={cx('title')} onClick={() => handleOnclick(stateInfo, '3')}>
          Điều khoản và chính sách
        </h4>
        {stateInfo === '3' && <MoreInfo data={listInfo[2].field} />}
      </div>
      <div className={cx('wrapper_more')}>
        <Tippy
          interactive
          offset={[-4, 8]}
          className="sidebarFooter_custom-tippy"
          delay={[0, 200]}
          content={
            <div className={cx('wrapper-policy')}>
              <a href="/policy" className={cx('title-law')}>
                NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
              </a>
            </div>
          }
          placement="top-end"
        >
          <span className={cx('more')}>Thêm</span>
        </Tippy>
      </div>

      <div className={cx('year_name_title')} data-e2e="copyright">
        © 2024 TikTok
      </div>
    </div>
  );
}

export default SideBarFooter;
