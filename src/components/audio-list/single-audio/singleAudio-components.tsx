import Paper from '@mui/material/Paper';
import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import { size } from './../../../style/mixins';

export const Container = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.secondary.dark,
  padding: '10px',
  display: 'flex'
}))
export const ControllerBtn = styled(Button)(({theme}) => ({
  backgroundColor: theme.palette.secondary.main,
  ...size({width: '60px', height: '60px'}),
  borderRadius: '50%',
  flexShrink: '0',
  marginRight: '10px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main
  },
  '& .icon': {
    fill: '#fff',
    ...size({width: '40px', height: '40px'})
  },
  '& .icon--pause': {
    ...size({width: '32px', height: '32px'})

  }
}))
export const WaveForm = styled('div')({
})
export const AudioContent = styled('div')({
  flexGrow: '1',
})