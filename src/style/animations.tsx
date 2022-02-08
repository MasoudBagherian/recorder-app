import { keyframes } from '@mui/system';

export const blink = keyframes`
  from {
    transform: scale(.2);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;
