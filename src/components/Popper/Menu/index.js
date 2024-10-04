import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({
  children,
  items = [],
  offsetDefault = [12, 10],
  hideOnClick = false,
  onChange = defaultFn,
  onClickExtend = '',
  visibleMenu,
  onClickOutside,
  onMouseEnter,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  // console.log(items);
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          Item
          key={index}
          data={item}
          onClick={
            item.flag === '1' && onClickExtend !== ''
              ? onClickExtend
              : () => {
                  if (isParent) {
                    setHistory((prev) => [...prev, item.children]);
                  } else {
                    onChange(item);
                  }
                }
          }
        />
      );
    });
  };
  return (
    <Tippy
      // visible={true}
      // onMouseEnter={onMouseEnter}
      // visible={visibleMenu}
      onClickOutside={onClickOutside}
      // trigger="manual"
      hideOnClick={hideOnClick}
      offset={offsetDefault}
      delay={[0, 800]}
      interactive={true}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-wrapper')}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}> {renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Menu;
