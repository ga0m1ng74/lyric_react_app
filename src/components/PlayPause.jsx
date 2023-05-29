import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa';

const PlayPause = ({isPlaying,activeSong,song,handlePause,handlePlay}) => (
  isPlaying && activeSong?.title === song.title? 
  (<FaPauseCircle  size={35} className='text-grey-300' onClick={handlePause}/>)
  :(<FaPlayCircle size={35} className='text-grey-300' onClick={handlePlay}/>)
);

export default PlayPause;
