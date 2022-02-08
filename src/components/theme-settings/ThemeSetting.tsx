import React , {useState} from 'react';
import { ColerSet, Color, ThemeControls, ThemeBtn } from './themeSettings-components';
import SettingsIcon from '@mui/icons-material/Settings';
import { colorSets as colors } from '../../style/theme/theme';
import Grid from '@mui/material/Grid';
import { ThemeColors } from '../../style/theme/theme';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { setTheme } from '../../redux/slices/themeSlice';
 const  ThemeSettings = () => {
   const dispatch = useDispatch<AppDispatch>()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, color: ThemeColors) => {
    dispatch(setTheme(color));
    handleClose();
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <ThemeBtn aria-describedby={id} variant="contained" onClick={handleClick}>
        <SettingsIcon/>
      </ThemeBtn>
      <ThemeControls
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        >
        <ColerSet>
          <Grid container spacing={1}>
            {colors.map((color, index) => (
              <Grid item  key={index} >
                <Color onClick={(e) => handleSelectTheme(e, color)} style={{
                  backgroundColor: color.secondary.main
                }}/>
              </Grid>
              ))}
          </Grid>
        </ColerSet>
      </ThemeControls>
    </>
  );
}

export default ThemeSettings;