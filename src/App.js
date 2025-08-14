import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from "./theme";
import { Box } from '@mui/material';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <Box sx={{ height: { xs: 1, sm: 3, md: 10 }, width: '100%', mb: { xs: 1, sm: 2, md: 8 } }}  />
          <AppRoutes />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
