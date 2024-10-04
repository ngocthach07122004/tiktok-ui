import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Image from '~/components/Image';
import Video from '~/components/Video';

import nh from 'src/videoSrc/nganhatiktok.mp4';
import cinn from 'src/videoSrc/ciinTlin.mp4';
import d2 from 'src/videoSrc/Download-2.mp4';
import d3 from 'src/videoSrc/Download-3.mp4';
import d4 from 'src/videoSrc/Download-4.mp4';
import d5 from 'src/videoSrc/Download-5.mp4';
import d6 from 'src/videoSrc/Download-6.mp4';
import d7 from 'src/videoSrc/Download-7.mp4';

const cx = classNames.bind(styles);
const listVideo = [
  {
    srcVideo: nh,
  },
  {
    srcVideo: cinn,
  },
  {
    srcVideo: d2,
  },
  {
    srcVideo: d3,
  },
  {
    srcVideo: d4,
  },
  {
    srcVideo: d5,
  },
  {
    srcVideo: d6,
  },
  {
    srcVideo: d7,
  },
];
function Home() {
  return (
    <div className={cx('container')}>
      {listVideo.map((current, index) => (
        <Video key={index} srcVideo={current.srcVideo} />
      ))}
    </div>
  );
}

export default Home;
