import { useContext } from "react";
import { ColorModeContext } from '../theme';
import { GitHub, LinkedIn, Email, CloudDownload, DarkMode, LightMode } from '@mui/icons-material';
import { Typography, Stack, IconButton, Paper, Tooltip, Box, useTheme } from '@mui/material';
import PaletteSelectorButton from "./PaletteSelectorButton";


const HeroSection = () => {
    const theme = useTheme();
    const { toggleColorMode } = useContext(ColorModeContext);

    return (
        <Box>
            <Paper variant="outlined"
                sx={{
                    position: 'fixed', top: 20, right: 10, zIndex: 1000,
                    borderRadius: '50px',
                }}>
                <IconButton color="inherit" onClick={toggleColorMode}>
                    {theme.palette.mode === "dark" ?
                        <Tooltip title="Enable Light Mode" arrow placement="left">
                            <DarkMode />
                        </Tooltip>
                        :
                        <Tooltip title="Enable Dark Mode" arrow placement="left">
                            <LightMode />
                        </Tooltip>
                    }
                </IconButton>
            </Paper>

            <Paper variant="outlined"
                sx={{
                    position: 'fixed', top: 80, right: 10, zIndex: 1000,
                    borderRadius: '50px',
                }}><PaletteSelectorButton /></Paper>



            <Typography
                variant="h1"
                sx={{ fontSize: { xs: '2.5rem', sm: '3rem', md: '5rem' }, mb: { xs: 1, sm: 0 } }}
            >
                Welcome.</Typography>

            <Typography
                variant="body1"
                color="textSecondary"
                sx={{
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                    textAlign: { xs: 'justify', sm: 'left' },
                }}
            >
                Hi, I’m Abhishek — a{' '}
                <Box component="span" sx={{ color: 'warning.main' }}>
                    Front-end developer
                </Box>{' '}
                passionate about turning complex ideas into beautiful, functional interfaces. From dynamic social platforms to robust eCommerce sites, I focus on crafting experiences that are both visually engaging and seamless to use.
            </Typography>



            {/* Social Links  */}
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Paper variant="outlined" sx={{ borderRadius: '50%' }}>
                    <IconButton
                        href="https://github.com/your-username"
                        color="inherit"
                    >
                        <Tooltip title="GitHub" arrow placement="top">
                            <GitHub />
                        </Tooltip>
                    </IconButton>
                </Paper>
                <Paper variant="outlined" sx={{ borderRadius: '50%' }}>
                    <IconButton
                        href="https://linkedin.com/in/your-username"
                        color="inherit"
                    >
                        <Tooltip title="LinkedIn" arrow placement="top">
                            <LinkedIn />
                        </Tooltip>
                    </IconButton>
                </Paper>
                <Paper variant="outlined" sx={{ borderRadius: '50%' }}>
                    <IconButton
                        href="https://Email.com/your-username"
                        color="inherit"
                    >
                        <Tooltip title="Email" arrow placement="top">
                            <Email />
                        </Tooltip>
                    </IconButton>
                </Paper>
                <Paper variant="outlined" sx={{ borderRadius: '50%' }}>
                    <IconButton
                        href="https://Email.com/your-username"
                        color="inherit"
                    >
                        <Tooltip title="Download Resume" arrow placement="top">
                            <CloudDownload />
                        </Tooltip>
                    </IconButton>
                </Paper>
            </Stack>

        </Box>

    );
};

export default HeroSection;