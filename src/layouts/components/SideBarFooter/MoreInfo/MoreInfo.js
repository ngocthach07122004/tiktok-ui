import classNames from 'classnames/bind';
import styles from './MoreInfo.module.scss';
const cx = classNames.bind(styles);

function MoreInfo({ data }) {
  return (
    <div className={cx('wrapper')}>
      {data.map((value) => {
        return (
          <a className={cx('info')} href={`/${value}`}>
            {value}
          </a>
        );
      })}
    </div>
  );
}

export default MoreInfo;
