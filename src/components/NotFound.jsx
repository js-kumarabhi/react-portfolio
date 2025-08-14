import { Home } from '@mui/icons-material';
import { Button, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.palette.mode === 'dark'
          ? 'radial-gradient(circle at center, #1a1a1a 0%, #121212 100%)'
          : 'radial-gradient(circle at center, #f5f5f5 0%, #e6e6e6 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: theme.palette.text.primary,
      }}
    >
      {/* Starry background effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: theme.palette.mode === 'dark'
            ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23cccccc'/%3E%3Ccircle cx='30' cy='70' r='1.5' fill='%23cccccc'/%3E%3Ccircle cx='80' cy='20' r='1' fill='%23cccccc'/%3E%3Ccircle cx='50' cy='50' r='1.2' fill='%23cccccc'/%3E%3Ccircle cx='20' cy='90' r='1' fill='%23cccccc'/%3E%3C/svg%3E")`
            : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23333333'/%3E%3Ccircle cx='30' cy='70' r='1.5' fill='%23333333'/%3E%3Ccircle cx='80' cy='20' r='1' fill='%23333333'/%3E%3Ccircle cx='50' cy='50' r='1.2' fill='%23333333'/%3E%3Ccircle cx='20' cy='90' r='1' fill='%23333333'/%3E%3C/svg%3E")`,
          opacity: 0.3,
          zIndex: 0,
        }}
      />
      <Box sx={{ textAlign: 'center', zIndex: 1 }}>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3rem', md: '6rem' },
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            textShadow: theme.palette.mode === 'dark'
              ? '0 0 10px rgba(255,255,255,0.5)'
              : '0 0 10px rgba(0,0,0,0.3)',
          }}
        >
          404
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: 2,
            color: theme.palette.text.secondary,
          }}
        >
          Lost in Space
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: theme.palette.text.secondary,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          It seems you've ventured into uncharted space. The page you're looking for doesn't exist in this galaxy.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          disableElevation
          size='large'
          sx={{
            borderRadius: '50px',
            textTransform: 'none',
          }}
          startIcon={<Home />}
       >
          Take Me Home
        </Button>

      </Box>
    </Box>
  );
};

export default NotFound;