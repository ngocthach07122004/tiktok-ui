import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import * as Icons from '~/components/Icons';
import SuggestedAccounts from '~/layouts/components/SuggestedAccounts';
import SideBarFooter from '~/layouts/components/SideBarFooter';
const cx = classNames.bind(styles);
function SideBar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="For you"
          to={config.routes.home}
          solidIcon={<Icons.HomeSolidIcon />}
          regularIcon={<Icons.HomeRegularIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          solidIcon={<Icons.UserGroupSolidIcon />}
          regularIcon={<Icons.UserGroupRegularIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          solidIcon={<Icons.LiveSolidIcon />}
          regularIcon={<Icons.LiveRegularIcon />}
        />
      </Menu>
      <SuggestedAccounts label="Suggested accounts" />
      <SuggestedAccounts label="Following accounts" />
      {/* <SuggestedAccounts label="Following accounts" /> */}
      <a href="/create/emotion">
        <div className={cx('logo')}>
          <img
            className={cx('logo-img')}
            src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png"
            alt="eh-background"
          ></img>
          <div className={cx('title')}>
            <p className={cx('info')}>Tạo hiệu ứng tiktok, nhận phần thưởng</p>
            {/* <p className={cx('info')}>
                 nhận phần thưởng
              </p> */}
          </div>
        </div>
      </a>
      <SideBarFooter />
    </aside>
  );
}

export default SideBar;
