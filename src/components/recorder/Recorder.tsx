import React, {useState} from 'react';
import {RecorderContainer, RecorderButton , CancelButton} from './recorder-components';
import MicIcon from '@mui/icons-material/Mic';
import PauseIcon from '@mui/icons-material/Pause';
import RecorderTimer from './RecorderTimer';

import { CustomRecorder } from '../../App';

interface RecorderProps{
  recorder : CustomRecorder;
}



const setIcon = (isRecording: Boolean) => {
  if(isRecording){
    return <PauseIcon className="icon icon--pause"/>
  }
  else{
    return <MicIcon className="icon"/>
  }
}

const Recorder: React.FC<RecorderProps> = ({recorder}) => {
  const [recording, setRecording] = useState<Boolean>(false);
  const handleRecord = () => {
    // start recording
    if(!recording){
      setRecording(true)
      recorder.recorderEl!.start()
    // stop recording
    }else{
      setRecording(false)
      recorder.recorderEl!.stop()
    }
  }
  const hanldeCancelRecording = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    recorder.recordAllowed = false;
    recorder.recorderEl!.stop();
    setRecording(false)
  }
  return <RecorderContainer sx={{
    justifyContent: recording? 'space-between': 'flex-end'
  }}>
    {recording? <>
    <RecorderTimer/>
    <CancelButton onClick={hanldeCancelRecording}>cancel</CancelButton>
    </>: null}
    
    <RecorderButton color='secondary' onClick={handleRecord}>
      {setIcon(recording)}
    </RecorderButton>
  </RecorderContainer>;
};

export default Recorder;
