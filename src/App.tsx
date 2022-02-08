import {useEffect, useState} from 'react';
import Recorder from './components/recorder/Recorder';
import {ThemeProvider} from '@mui/material/styles';
import { theme, ThemeColors } from './style/theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeSettings from './components/theme-settings/ThemeSetting';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState }  from './redux/store';
import { v4 as uuidv4 } from 'uuid';
import { addAudio } from './redux/slices/audiosSlice';
import AudioList from './components/audio-list/AudioList';
import type { Audio } from './redux/slices/audiosSlice';
import { Wrapper, Main } from './layout';

export interface CustomRecorder{
  recorderEl: MediaRecorder | null;
  recordAllowed : Boolean;
}
function App() {
  const dispatch = useDispatch<AppDispatch>()
  const themeColors = useSelector<RootState>(state => state.theme.colors) as ThemeColors
  const audios = useSelector<RootState>(state => state.audio.audios) as Audio[]
  const [recorder, setRecorder] = useState<CustomRecorder >({recorderEl: null, recordAllowed: false})
  const handleRecordAudio = (e: BlobEvent) => {
    if(!recorder.recordAllowed){
      recorder.recordAllowed = true;
      return 
    }
    const audioBlob = e.data
    const audioUrl = URL.createObjectURL(audioBlob);
    const newAudio = {id: uuidv4(), audioUrl: audioUrl}
    dispatch(addAudio(newAudio))
  }

  useEffect(() => {

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log('getUserMedia supported.');
      navigator.mediaDevices.getUserMedia ({ audio: true })
      .then(function(stream) {
        const mediaRecorder: CustomRecorder = {
          recorderEl: new MediaRecorder(stream),
          recordAllowed: true
        }
        setRecorder(mediaRecorder);
      })
      .catch(function(err) {
        alert('The following getUserMedia error occurred: ' + err);
      });
    }else {
      alert('getUserMedia not supported on your browser!');
    }
  }, [])
  useEffect(( ) => {
    
    recorder.recorderEl?.addEventListener('dataavailable', handleRecordAudio)
    return () => {
      recorder.recorderEl?.removeEventListener('dataavailable', handleRecordAudio)

    }
  }, [recorder])
  return (
    <ThemeProvider theme={theme(themeColors)}>
    <CssBaseline />
      <Wrapper>
      <Main>

      <ThemeSettings/>
      {audios.length? <AudioList audios={audios}/>: null}
      
      </Main>
      <Recorder recorder={recorder}/>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
