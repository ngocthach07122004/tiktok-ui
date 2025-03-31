import classNames from 'classnames/bind';
import styles from './BoxComment.module.scss';
import Tippy from '@tippyjs/react';
import Comment from '../Comment';
import { AnnotationIcon, EmotionIcon, IconClose, ShareIcon } from '../Icons';

const cx = classNames.bind(styles);

// {[220, 200]}
function BoxComment({ onClickHandleClose, stateMessage, children, childrenMessageComponent }) {
  const handleOncloseBoxComment = () => {
    console.log('check');
    return onClickHandleClose;
  };
  let renderMessage = () =>
    stateMessage ? (
      <div className={cx('main_container')}>
        <div className={cx('main_header')}>
          <p className={cx('header_comment')}>
            <span className={cx('title_comment')}>Bình luận</span>
            <span className={cx('number_of_comment')}>(8912)</span>
          </p>
          <div onClick={handleOncloseBoxComment} className={cx('wrapper_close_comment')}>
            {' '}
            <IconClose className={cx('close_comment')} />
          </div>
        </div>
        <div className={cx('main_body')}>
          {/* {
       childrenMessageComponent.map( (index,message) => (
         <div key={index} > {message}  </div>
       )) } </div> */}

          {<Comment />}
        </div>
        <div className={cx('container_comment')}>
          <div className={cx('wrapper_comment')}>
            <input placeholder="Thêm bình luận..." className={cx('input_comment')} />
            <div className={cx('icon_comment', 'right_icon_comment')}>{<AnnotationIcon />}</div>
            <div className={cx('icon_comment', 'left_icon_comment')}>{<EmotionIcon />}</div>
          </div>
          <div className={cx('wrapper_post_comment')}>
            <button className={cx('post_comment')}>Đăng</button>
          </div>
        </div>
      </div>
    ) : (
      <></>
    );
  return (
    // <div className={cx('container')}>

    <Tippy
      // interactive={true}
      //   visible
      className={cx('tippy_wrapper')}
      offset={[230, -230]}
      render={renderMessage}
    >
      {/* {childrenMessageComponent.forEach((MessageComponent) => MessageComponent)} */}
      {children}
    </Tippy>

    // </div>
  );
}

export default BoxComment;
