import React, { useState, useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import {
    CalendarMonth, Mail, PhoneAndroid,
    GitHub, LinkedIn, LocationOn,
    ExpandMore,
    ExpandLess,
    WhatsApp,
} from '@mui/icons-material';
import {
    Avatar, Box, Button, Collapse, Divider, IconButton, List, ListItem,
    ListItemAvatar, ListItemText, Paper, Stack, Typography
} from '@mui/material';
import SayHi from './SayHi';

const BasicInfo = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [showContact, setShowContact] = useState(!isSmallScreen);

    // Update when screen size changes
    useEffect(() => {
        setShowContact(!isSmallScreen);
    }, [isSmallScreen]);


    const [openDialog, setOpenDialog] = useState(false);

    const handleOpen = () => setOpenDialog(true);
    const handleClose = () => setOpenDialog(false);

    return (
        <React.Fragment>
            <Paper
                variant='outlined'
                sx={{
                    borderRadius: '8px',
                    position: 'relative'
                }}
            >
                {/* Show toggle button only for xs screens */}
                {isSmallScreen && (
                    <Button
                        size='small'
                        sx={{
                            position: 'absolute', top: 0, right: 0,
                            textTransform: 'none'
                        }}
                        startIcon={showContact ? <ExpandLess /> : <ExpandMore />}
                        onClick={() => setShowContact(!showContact)}
                    >
                        {showContact ? "Hide" : "Show"}
                    </Button>
                )}

                <Box
                    sx={{
                        p: 2,
                        display: 'flex',
                        justifyContent: { sm: "flex-start", md: "center" },
                        flexDirection: { sm: 'row', md: 'column' },
                        alignItems: 'center',
                        gap: { xs: 2, sm: 1 }
                    }}>
                    <Avatar variant='square' src="/images/abhishek_pic.jpg"
                        sx={{
                            width: { xs: 60, sm: 60, md: 100, lg: 120 },
                            height: { xs: 60, sm: 60, md: 100, lg: 120 },
                            borderRadius: 2
                        }}
                    />
                    <Box>
                        <Typography variant="h5" gutterBottom>
                            Abhishek Kumar
                        </Typography>
                        <Paper variant='outlined'
                            sx={{
                                fontSize: '12px', py: 0.5, px: 1.5, width: 'fit-content', borderRadius: '50px', textAlign: 'center', letterSpacing: '1px'
                            }}>
                            Frontend Developer
                        </Paper>
                    </Box>
                </Box>

                <Collapse in={showContact} timeout="auto" unmountOnExit>

                    <List dense disablePadding>
                        <ListItem>
                            <ListItemAvatar sx={{ minWidth: 0, mr: 2 }}>
                                <Avatar sx={{ borderRadius: "8px", backgroundColor: 'background.default' }}>
                                    <Mail color='primary' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Email"
                                secondary="js.kumarabhishek@gmail.com"
                                slotProps={{
                                    secondary: {
                                        noWrap: true,
                                        sx: { overflow: 'hidden', textOverflow: 'ellipsis' }
                                    }
                                }}
                            />
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar sx={{ minWidth: 0, mr: 2 }}>
                                <Avatar sx={{ borderRadius: "8px", backgroundColor: 'background.default' }}>
                                    <PhoneAndroid color='primary' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Phone" secondary="+91 9123 137 855" />
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar sx={{ minWidth: 0, mr: 2 }}>
                                <Avatar sx={{ borderRadius: "8px", backgroundColor: 'background.default' }}>
                                    <CalendarMonth color='primary' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Birthday" secondary="January 13, 1998" />
                        </ListItem>

                        <ListItem>
                            <ListItemAvatar sx={{ minWidth: 0, mr: 2 }}>
                                <Avatar sx={{ borderRadius: "8px", backgroundColor: 'background.default' }}>
                                    <LocationOn color='primary' />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Location" secondary="Aurangabad, Bihar" />
                        </ListItem>
                    </List>

                    <Divider sx={{ mx: 2, mt: 2 }} />
                    <Stack justifyContent={'center'} direction="row" spacing={2} sx={{ p: 2 }}>
                        <IconButton color="primary" sx={{
                            border: '1px solid', borderColor: 'divider',
                            backgroundColor: 'background.default'
                        }} aria-label="github"
                            onClick={() => window.open('https://github.com/js-kumarabhi', '_blank')}
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton color="primary" sx={{
                            border: '1px solid', borderColor: 'divider',
                            backgroundColor: 'background.default'
                        }} aria-label="linkedin"
                            onClick={() => window.open('https://www.linkedin.com/in/js-kumarabhi/', '_blank')}
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton color='primary' sx={{
                            border: '1px solid', borderColor: 'divider',
                            backgroundColor: 'background.default'
                        }} aria-label='whatsapp'
                            onClick={handleOpen}
                        >
                            <WhatsApp />
                        </IconButton>
                    </Stack>
                </Collapse>
            </Paper>

            <SayHi
                openDialog={openDialog}
                onClose={handleClose} />
        </React.Fragment>
    );
};

export default BasicInfo;
