import React, { useState } from 'react';
import { GitHub, OpenInNew } from '@mui/icons-material';
import portfolioData from '../data/portfoliodata.json';
import {
    Typography,
    Chip,
    Grid,
    Stack,
    Box,
    IconButton,
    Grow,
} from '@mui/material';

const MyPortfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(portfolioData.map(item => item.category))];

    const filteredData =
        selectedCategory === 'All'
            ? portfolioData
            : portfolioData.filter(item => item.category === selectedCategory);

    return (
        <React.Fragment>
            <Stack direction={'row'} flexWrap={'wrap'} gap={1} mb={2}>
                <Typography variant="body1" flexGrow={1}>
                    A collection of projects I've worked on.
                </Typography>

                {/* Category Chips */}
                <Stack direction="row" flexWrap="wrap" gap={1}>
                    {categories.map((cat) => (
                        <Chip
                            size="small"
                            key={cat}
                            label={cat}
                            clickable
                            variant={selectedCategory === cat ? 'filled' : 'outlined'}
                            color={selectedCategory === cat ? 'primary' : 'default'}
                            onClick={() => setSelectedCategory(cat)}
                        />
                    ))}
                </Stack>
            </Stack>

            <Grid container spacing={2}>
                {filteredData.map((project, index) => (
                    <Grow
                        in={true}
                        style={{ transformOrigin: '0 0 0' }}
                        timeout={500 + index * 100}
                        key={project.name}
                    >
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box sx={{ height: '100%', backgroundColor: 'background.default', borderRadius: '8px' }}>
                                <Box
                                    sx={{
                                        height: '200px',
                                        position: 'relative',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        bgcolor: 'background.paper',
                                        '&:hover .overlay': {
                                            opacity: 1
                                        },
                                        '&:hover img': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                >
                                    {/* Image */}
                                    <Box
                                        component="img"
                                        src={project.image}
                                        alt={project.name}
                                        sx={{
                                            width: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            transition: 'transform 0.4s ease'
                                        }}
                                    />

                                    {/* Overlay with icons */}
                                    <Box
                                        className="overlay"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            bgcolor: 'rgba(0,0,0,0.5)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 2,
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease'
                                        }}
                                    >
                                        {project.view_url && (
                                            <IconButton
                                                component="a"
                                                href={project.view_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.2)', '&:hover': { bgcolor: 'primary.main' } }}
                                            >
                                                <OpenInNew />
                                            </IconButton>
                                        )}
                                        {project.github_url && (
                                            <IconButton
                                                component="a"
                                                href={project.github_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.2)', '&:hover': { bgcolor: 'primary.main' } }}
                                            >
                                                <GitHub />
                                            </IconButton>
                                        )}
                                    </Box>
                                </Box>

                                {/* Content */}
                                <Box sx={{ p: 1 }}>
                                    <Typography variant="body1" gutterBottom color="primary">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                    <Stack direction="row" flexWrap="wrap" mt={1} gap={1}>
                                        {project.technologies.map((tech, index) => (
                                            <Chip
                                                key={index}
                                                label={tech}
                                                size="small"
                                                variant="outlined"
                                                sx={{ borderRadius: '4px', fontSize: '0.7rem' }}
                                            />
                                        ))}
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                    </Grow>
                ))}
            </Grid>

        </React.Fragment>
    );
};

export default MyPortfolio;
