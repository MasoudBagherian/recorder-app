import {styled} from '@mui/system';
import Button from '@mui/material/Button';
import { size } from './../../style/mixins';

export const RecorderContainer = styled('div')(({theme}) => ({
  padding: '8px 12px',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  position: 'relative'
}))
export const RecorderButton = styled(Button)({
  ...size({width: '40px', height: '40px'}),
  borderRadius: '50%',
  '& .icon': {
    ...size({width: '30px', height: '30px'}),
    fill: '#ccc',
  },
  '& .icon--pause': {
    ...size({width: '24px', height: '24px'}),

  }
})
export const CancelButton = styled(Button)(({theme}) => ({
  color: theme.palette.secondary.light,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
}))
