import { styled } from '@mui/system';
import { size } from '../../style/mixins';
import { blink } from '../../style/animations';

export const TimerContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
})
export const Flash = styled('div')(({theme}) => ({
  ...size({width: '16px', height: '16px'}),
  backgroundColor: theme.palette.primary.dark,
  borderRadius: '50%',
  marginRight: '8px',
  animation: `${blink} .5s infinite alternate`
}))
export const TimerDisplay = styled('span')({
  color: '#fff',
  fontSize: '14px',  
})