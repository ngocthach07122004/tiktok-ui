import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import Image from '../Image';
import { LikeCommentIcon } from '../Icons';
const cx = classNames.bind(styles);

function comment() {
  return (
    <div className={cx('comment_wrapper')}>
      <Image />
      <div className={cx('main_body')}>
        <span className={cx('title_name')}></span>
        <div className={cx('body_child')}>
          <div className={cx('body_comment')}>
            <p className={cx('info_comment')}></p>
            <p className={cx('info_day_comment')}>
              <span className={cx('info_day')}> </span>
              <span className={cx('box_comment')}> </span>
            </p>
          </div>
          <div className={cx('like_comment')}>
            <LikeCommentIcon />
            <span className={cx('like_number')}> </span>
          </div>
        </div>
        <div className={cx('view_comment')}>
          <a className={cx('access_comment')} href="/">
            {' '}
          </a>
        </div>
      </div>
    </div>
  );
}

export default comment;
