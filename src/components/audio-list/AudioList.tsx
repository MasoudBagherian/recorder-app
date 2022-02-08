import { useState } from 'react';
import type { Audio } from './../../redux/slices/audiosSlice';
import SingleAudio from './single-audio/SingleAudio';
import { Wrapper } from './audioList-components';
interface AudioListProps{
  audios: Audio[]
}

const AudioList: React.FC<AudioListProps> = ({audios}) => {
  const [activeId, setActiveId] = useState<Audio['id']>(null)
  const changeActiveId = (id: Audio['id']): void => {
    setActiveId(id);
  }
  return <Wrapper spacing={2}>
    {audios.map(audio => (
      <SingleAudio key={audio.id} audioUrl={audio.audioUrl} audioId={audio.id} activeId={activeId}
      dispatchActiveId={changeActiveId}/>
    ))}
  </Wrapper>;
};

export default AudioList;
