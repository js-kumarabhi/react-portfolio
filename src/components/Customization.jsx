import React, { useContext } from 'react';
import {
    Box,
    Typography,
    IconButton,
    Stack,
    Slide,
    Divider,
    useTheme
} from '@mui/material';
import { ChevronRight, LightMode, DarkMode } from '@mui/icons-material';
import { ColorModeContext } from "../theme";
import PaletteSelectorButton from './PaletteSelectorButton';

const Customization = ({ paletteOpen, setPaletteOpen }) => {
    const theme = useTheme();
    const { toggleColorMode } = useContext(ColorModeContext);

    return (
        <Slide direction="left" in={paletteOpen} mountOnEnter unmountOnExit>
            <Box
                sx={{
                    position: 'fixed',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    height: 'auto',
                    width: 220,
                    bgcolor: 'background.paper',
                    boxShadow: 4,
                    zIndex: 1300,
                    p: 2,
                    borderRadius: '8px 0 0 8px',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRight: 'none'
                }}
            >
                {/* Header */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h6" fontSize="1rem">Customization</Typography>
                    <IconButton size="small" onClick={() => setPaletteOpen(false)}>
                        <ChevronRight />
                    </IconButton>
                </Stack>

                {/* Theme Toggle */}
                <Typography variant="body2" mb={1}>Theme Mode</Typography>
                <IconButton
                    onClick={toggleColorMode}
                    size="small"
                >
                    {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
                </IconButton>


                <Divider sx={{ my: 2 }} />

                {/* Color Palette Selector */}
                <Typography variant="body2" mb={1}>Primary Color</Typography>
                <PaletteSelectorButton />
            </Box>
        </Slide>
    );
};

export default Customization;
