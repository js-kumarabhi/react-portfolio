import React, { useContext, useEffect } from 'react';
import { ColorModeContext } from '../theme';
import { Stack, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const PaletteSelectorButton = () => {
  const colorMode = useContext(ColorModeContext);
  const [selected, setSelected] = React.useState('');

const primaryOptions = [
  { color: '#10b981' }, // Standard Primary
  { color: '#ea342a' }, // redish
  { color: '#fbbf24' }, // yellowish
  { color: '#a855f7' }, // purplish
  { color: '#1d4ed8' }, // bluish
];


  const handleSelect = (color) => {
    setSelected(color);
    colorMode.setPrimaryColor(color);
  };

    // Load saved primary color from localStorage on mount
  useEffect(() => {
    const currentPrimary = localStorage.getItem('primaryMain');
    if (currentPrimary) {
      setSelected(currentPrimary);
    }
  }, []);

  return (
    <Stack spacing={1} direction="row">
      {primaryOptions.map((option) => (
        <IconButton
          key={option.color}
          onClick={() => handleSelect(option.color)}
          sx={{
            bgcolor: option.color,
            width: 28,
            height: 28,
            p: 0,
            '&:hover': {
              opacity: 0.9,
            },
          }}
        >
          {selected === option.color && <CheckIcon sx={{ fontSize: 16 }} />}
        </IconButton>
      ))}
    </Stack>
  );
};

export default PaletteSelectorButton;
