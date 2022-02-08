import  {createTheme}  from "@mui/material/styles";
export interface ThemeColors{
  primary: {
    main: string;
    dark?: string;
    light?: string;
  },
  secondary: {
    main: string;
    dark?: string;
    light?: string;
  }
}
export const colorSets: ThemeColors[] = [
  {
    primary: {
      main: '#01263a',
      dark: '#00131c',
      light: '#043959'
    }, 
    secondary: {
      main: '#135e96',
      dark: '#0a4b78',
      light: '#2271b1'
    }
  },
  {
    primary: {
      main: '#6b2a00',
      dark: '#471c00',
      light: '#8e3900'
    }, 
    secondary: {
      main: '#d65500',
      dark: '#b24700',
      light: '#f96400'
    }
  },
  {
    primary: {
      main: '#1d2327',
      dark: '#101517',
      light: '#2c3338'
    }, 
    secondary: {
      main: '#50575e',
      dark: '#3c434a',
      light: '#646970'
    }
  },
  {
    primary: {
      main: '#362400',
      dark: '#211600',
      light: '#4a3200'
    }, 
    secondary: {
      main: '#755100',
      dark: '#614200',
      light: '#996800'
    }
  },
  {
    primary: {
      main: '#003008',
      dark: '#001c05',
      light: '#00450c'
    }, 
    secondary: {
      main: '#007017',
      dark: '#005c12',
      light: '#008a20'
    }
  },
  {
    primary: {
      main: '#451313',
      dark: '#240a0a',
      light: '#691c1c'
    }, 
    secondary: {
      main: '#b32d2e',
      dark: '#8a2427',
      light: '#d63638'
    }
  },
  {
    primary: {
      main: '#4e1c4d',
      dark: '#341333',
      light: '#682667'
    }, 
    secondary: {
      main: '#9c399a',
      dark: '#823d81',
      light: '#b643b4'
    }
  },
  {
    primary: {
      main: '#64073f',
      dark: '#42042a',
      light: '#850954'
    }, 
    secondary: {
      main: '#c80e7f',
      dark: '#a60b6a',
      light: '#e91094'
    }
  },
]

export const theme = ({primary, secondary}: ThemeColors) => {
  return createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: primary.dark,
            fontFamily: "Poppins, sans-serif;"
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: '0',
            font: 'inherit'
          }
        }
      }
    },
    palette: {
      primary: {
        main: primary.main 
      },
      secondary: {
        main: secondary.main
      },
    }
  })
}
