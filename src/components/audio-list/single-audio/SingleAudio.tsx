import { useState, useRef, useEffect } from 'react';
import { Container, ControllerBtn, WaveForm, AudioContent } from "./singleAudio-components";
import { useSelector } from 'react-redux';
import WaveSurfer from 'wavesurfer.js';
import type { RootState } from '../../../redux/store';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { ThemeColors } from '../../../style/theme/theme';

import { Audio } from '../../../redux/slices/audiosSlice';

interface SingleAudioProps{
  audioUrl: string | null;
  audioId: Audio['id'];
  activeId: Audio['id'];
  dispatchActiveId: (id: Audio['id']) => void
}

function setIcon(isPlaying: Boolean){
  if(isPlaying){
    return <PauseIcon className="icon icon--pause"/>
  }else{
    return <PlayArrowIcon className="icon"/>
  }
}
const setWaveSurferOptions = (ref: HTMLDivElement, colors: ThemeColors) => ({
  container: ref,
  waveColor: colors.secondary.main,
  progressColor: colors.primary.main,
  barWidth: 3,
  responsive: true,
  hideCursor: true,
  cursorWidth: 0,
  height: 50,
  hideScrollbar: true,

  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  // partialRender: true

})
const SingleAudio: React.FC<SingleAudioProps> = ({audioUrl, audioId, activeId, dispatchActiveId}) => {
  const themeColors = useSelector<RootState>(state => state.theme.colors) as ThemeColors;
  const waveformRef = useRef<HTMLDivElement>(null);
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null)
  const hanldePlayAudio = () => {
    wavesurfer!.playPause();
    dispatchActiveId(audioId);
    setPlaying(prev => !prev)
  }
  const handleFinishPlaying = () => {
    console.log('finish playing')
    wavesurfer!.stop();
    setPlaying(false);
  }
  useEffect(() => {
    const options = setWaveSurferOptions(waveformRef.current!, themeColors)
    setWavesurfer(WaveSurfer.create(options))
  }, [])
  useEffect(() => {
    if(!activeId){
      return 
    }
    if(audioId! !== activeId! && wavesurfer){
      wavesurfer.pause();
      setPlaying(false)
    }
  }, [activeId])
  useEffect(() => {
    if(!wavesurfer){
      return
    }
    const url = audioUrl as (string | HTMLMediaElement)
    wavesurfer.load(url)
    wavesurfer.on('finish', handleFinishPlaying);
    return () => wavesurfer?.destroy();
  }, [wavesurfer])
  useEffect(() => {
    if(!wavesurfer){
      return 
    }
    wavesurfer.setWaveColor(themeColors.secondary.main);
    wavesurfer.setProgressColor(themeColors.primary.main); 
  }, [themeColors])
  
  const [playing, setPlaying] = useState<Boolean>(false);
  return <Container elevation={3}>
    <ControllerBtn 
    onClick={hanldePlayAudio}
    >
      {setIcon(playing)}
    </ControllerBtn>
    <AudioContent>
      <WaveForm ref={waveformRef}></WaveForm>
    </AudioContent>
  </Container>
};

export default SingleAudio;
