import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { size } from '../../style/mixins';
import Paper from '@mui/material/Paper';

export const ThemeBtn = styled(Button)({
  position: 'fixed',
  top: '10px',
  right: '10px'

})
export const ThemeControls = styled(Popover)({
  top: '5px',
  left: '5px',
})
export const ColerSet = styled(Paper)({
  padding: '5px',
  maxWidth: '120px'

})
export const Color = styled(Button)({
  ...size({width: '30px', height: "30px"}),
  borderRadius: '50%'
  
})