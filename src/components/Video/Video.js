import { useState, useRef, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import Image from '../Image';
import IconCustom from '../IconCustom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark, faCommentDots, faPause, faPlay, faShare } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';

import 'intersection-observer';
import { LikeIcon, MessageBoxIcon, RepostIcon, ShareIcon } from '../Icons';
import AccountPreview from '~/layouts/components/AccountPreview';
import Menu from '../Popper/Menu';
import MenuIconVideoDefault, { MenuIconVideoExtends } from './MenuIconVideo';
import BoxComment from '../BoxComment';
import Comment from '~/pages/Comment/CommentPage';

const childrenCommentComponent = <Comment />;

const cx = classNames.bind(styles);
function Video({ srcVideo }) {
  const [stateVideo, setStateVideo] = useState('1');
  const instanceVideo = useRef();
  const [stateExtendShareIcon, setStateExtendShareIcon] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [stateMessage, setStateMessage] = useState(false);
  const extendButton = () => {
    console.log(stateExtendShareIcon);
    setStateExtendShareIcon((prev) => !prev);
    setVisibleMenu(true);
    console.log('check123');
    console.log(stateExtendShareIcon);
  };

  useEffect(() => {
    if (stateVideo === '0') {
      instanceVideo.current.play();
    } else {
      instanceVideo.current.pause();
    }
  }, [stateVideo]);
  const onClickStateVideoHandle = () => {
    setStateVideo((prev) => {
      if (prev === '1') {
        return '0';
      }
      return '1';
    });
  };

  useEffect(() => {
    const videoElement = instanceVideo.current;

    const handleScrollIntoView = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Tính toán vị trí của phần tử video
          const rect = videoElement.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetScrollPosition = rect.top + scrollTop - window.innerHeight / 2 + rect.height / 2 - 30;
          // console.log(rect.top);
          // console.log(scrollTop);
          // console.log(window.innerHeight);

          // Cuộn mượt mà đến vị trí tính toán
          window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth',
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollIntoView, {
      threshold: 0.5,
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  // useEffect(() => {
  //   console.log('stateExtendShareIcon has changed:', stateExtendShareIcon);
  // }, [stateExtendShareIcon]);
  const onMouseEnterHandle = () => setVisibleMenu(true);
  const onCLickCloseCommentHandler = () => setStateMessage((prev) => !prev);
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <div className={cx('wrapper_video')}>
          <video ref={instanceVideo} className={cx('video')}>
            <source src={srcVideo} type="video/mp4" />
          </video>
          <div onClick={() => onClickStateVideoHandle()} className={cx('play_pase_video')}>
            {stateVideo === '1' ? <FontAwesomeIcon className={cx('play_video')} icon={faPlay} /> : ''}
            {stateVideo === '0' ? <FontAwesomeIcon className={cx('pause_video')} icon={faPause} /> : ''}
          </div>
        </div>
        <div className={cx('container_icon')}>
          <div className={cx('wrapper_icon')}>
            <div className={cx('wrapperIcon')}>
              <IconCustom
                // className={cx('wrapperIconCustom')}
                defaultIcon="1"
                srcImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVLhVCMReryyxtn-uXeIxak9X_n1ODrtf7w&s"
              ></IconCustom>
              <div className={cx('wrapperAccount')}>
                <AccountPreview description="Nhớ theo dõi và ủng hộ kênh tiktok của mình nhé, cảm ơn mn nhiều" />
              </div>
            </div>

            <IconCustom dataDisplay="499.5K">
              <LikeIcon />
            </IconCustom>

            <div onClick={onCLickCloseCommentHandler}>
              <BoxComment
                stateMessage={stateMessage}
                onClickHandleClose={onCLickCloseCommentHandler}
                childrenMessageComponent={childrenCommentComponent}
              >
                {
                  <div>
                    <IconCustom dataDisplay="16.8K">
                      <FontAwesomeIcon className={cx('iconSetSize')} icon={faCommentDots} />
                    </IconCustom>
                  </div>
                }
              </BoxComment>
            </div>
            <IconCustom dataDisplay="11.4K">
              <FontAwesomeIcon className={cx('iconSetSize')} icon={faBookmark} />
            </IconCustom>
            <div>
              <Menu
                onMouseEnter={onMouseEnterHandle}
                visibleMenu={visibleMenu}
                onClickOutside={() => setVisibleMenu(false)}
                key={stateExtendShareIcon ? 'extended-menu' : 'default-menu'}
                offsetDefault={[225, 0]}
                items={stateExtendShareIcon ? MenuIconVideoExtends : MenuIconVideoDefault}
                onClickExtend={extendButton}
              >
                {
                  <div>
                    <IconCustom dataDisplay="10.8K">
                      <FontAwesomeIcon className={cx('iconSetSize')} icon={faShare} />
                    </IconCustom>
                  </div>
                }
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;

// const [menuItems, setMenuItems] = useState(MenuIconVideoDefault);
// const [isMenuVisible, setIsMenuVisible] = useState(false);

// useEffect(() => {
//   if (stateExtendShareIcon) {
//     setMenuItems(MenuIconVideoExtends);
//   } else {
//     setMenuItems(MenuIconVideoDefault);
//   }
// }, [stateExtendShareIcon]);

// const extendButton = () => {
//   setStateExtendShareIcon((prev) => !prev);
// };

// const handleMenuVisibility = (visible) => {
//   setIsMenuVisible(visible);
// };

// return (
//   <Tippy
//     visible={isMenuVisible}
//     onClickOutside={() => setIsMenuVisible(false)} // Đóng menu khi click ra ngoài
//     interactive={true}
//     placement="bottom-end"
//     render={(attrs) => (
//       <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
//         <PopperWrapper className={cx('menu-wrapper')}>
//           {/* Render menu dựa trên menuItems */}
//           {menuItems.map((item, index) => (
//             <MenuItem key={index} data={item} />
//           ))}
//         </PopperWrapper>
//       </div>
//     )}
//   >
//     <div onClick={() => setIsMenuVisible(true)}>
//       {/* Nội dung icon hoặc nút mở menu */}
//       <FontAwesomeIcon className={cx('iconSetSize')} icon={faShare} />
//     </div>
//   </Tippy>
// );
