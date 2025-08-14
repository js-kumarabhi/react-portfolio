import React from 'react';
import {
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    Paper,
    ListItemIcon,
    Button,
    Grid,
    ListItemAvatar,
    Avatar,
    Grow,
} from '@mui/material';
import experienceData from '../data/experience.json';
import educationData from '../data/educationdata.json';
import skillsData from '../data/skillsdata.json';
import { Apartment, CheckCircle, CloudDownload, School } from '@mui/icons-material';

const MyResume = () => {
    return (
        <React.Fragment>
            <Typography variant='body2'>
                Explore my work experience, education, and skills ( updated August 10, 2025 ).
            </Typography>

            {/* Experience */}
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={500}>
                <Box mt={2}>
                    <Typography variant="h6" gutterBottom>
                        Experience
                    </Typography>

                    {experienceData.map((exp) => (
                        <Paper key={exp.id} sx={{ px: 2, pb: 2, backgroundColor: 'background.default' }} elevation={0}>
                            <List dense>
                                <ListItem disableGutters disablePadding>
                                    <ListItemAvatar sx={{ minWidth: 0, mr: 1.5 }}>
                                        <Avatar variant='square' sx={{ width: 36, height: 36, backgroundColor: 'primary.main' }}>
                                            <Apartment />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={`${exp.title} - ${exp.company}`} secondary={`${exp.location} | ${exp.start_date} - ${exp.end_date || 'Present'}`}
                                        slotProps={{ primary: { variant: 'body1', color: 'primary' }, }}
                                    />
                                </ListItem>

                                {exp.responsibilities.map((resp, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                                            <CheckCircle fontSize='12px' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography variant="body2" color="textSecondary">
                                                {resp}
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    ))}
                </Box>
            </Grow>

            {/* Education */}
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={500}>
                <Box mt={4}>
                    <Typography variant="h6" gutterBottom>
                        Education
                    </Typography>
                    {educationData.education.map((edu) => (
                        <Paper key={edu.id} sx={{ px: 2, pb: 2, backgroundColor: 'background.default' }} elevation={0}>
                            <List dense>
                                <ListItem disableGutters disablePadding>
                                    <ListItemAvatar sx={{ minWidth: 0, mr: 1.5 }}>
                                        <Avatar variant='square' sx={{ width: 36, height: 36, backgroundColor: 'primary.main' }}>
                                            <School />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`${edu.degree} - (${edu.abbreviation})`}
                                        secondary={`${edu.university}, ${edu.location}`}
                                        slotProps={{ primary: { variant: 'body1', color: 'primary' } }}
                                    />
                                </ListItem>
                                <ListItem disableGutters disablePadding>
                                    <ListItemText primary={`Score: ${edu.score}`} />
                                </ListItem>
                                <ListItem disableGutters disablePadding>
                                    <ListItemText primary={`Session: ${edu.session}`} />
                                </ListItem>
                            </List>
                        </Paper>
                    ))}
                </Box>
            </Grow>

            {/* Skills */}
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={500}>
                <Box mt={4}>
                    <Typography variant="h6" gutterBottom>
                        Skills
                    </Typography>

                    <Grid container spacing={2}>
                        {skillsData.skills.map((skill) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={skill.id}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        height: "100%",
                                        backgroundColor: "background.default",
                                    }}
                                    elevation={0}
                                >
                                    <Typography variant="body1" color="primary" gutterBottom>
                                        {skill.category}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {skill.items.map((item, index) => (
                                            <Paper
                                                key={index}
                                                variant='outlined'
                                                sx={{
                                                    py: 0.2, px: 1.2, width: 'fit-content', borderRadius: '4px', alignItems: 'center',
                                                    display: 'flex', backgroundColor: 'background.default'
                                                }}>
                                                <Typography variant="caption">{item}</Typography>
                                            </Paper>
                                        ))}
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grow>

            {/* Download Resume */}
            <Box mt={4} textAlign="center">
                <Button variant="contained" color="primary" startIcon={<CloudDownload />} href="/Abhishek Kumar.docx" download sx={{ textTransform: 'none' }}>
                    Download Resume
                </Button>
            </Box>
        </React.Fragment>
    );
};

export default MyResume;
