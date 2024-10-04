import classNames from 'classnames/bind';
import styles from './IconCustom.module.scss';
import { PlusIcon } from '../Icons';
const cx = classNames.bind(styles);

function IconCustom({ children, className, dataDisplay = '', defaultIcon = '0', srcImg = '' }) {
  const classes = cx('wrapper', {
    [className]: className,
  });
  return (
    <div className={classes}>
      {defaultIcon === '0' ? (
        <div className={cx('wrapper_Icon')}>
          <div className={cx('wrapper_Child_Icon')}>{children}</div>
        </div>
      ) : (
        <img className={cx('image')} src={`${srcImg}`} />
      )}
      {defaultIcon === '0' ? (
        <span className={cx('dataDisplay')}> {dataDisplay}</span>
      ) : (
        <button className={cx('followAccount')}>
          <PlusIcon className={cx('plusIcon')} />
        </button>
      )}
    </div>
  );
}

export default IconCustom;
