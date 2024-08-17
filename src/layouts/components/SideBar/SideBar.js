import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import * as Icons from '~/components/Icons';
import SuggestedAccounts from '~/layouts/components/SuggestedAccounts';
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
    </aside>
  );
}

export default SideBar;
