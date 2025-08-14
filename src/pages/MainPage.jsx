import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, Tabs, Tab, Stack, Paper, AppBar, IconButton } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import MyPortfolio from '../components/MyPortfolio';
import BasicInfo from '../components/BasicInfo';
import AboutMe from '../components/AboutMe';
import MyResume from '../components/MyResume';
import Blog from '../components/Blog';
import { ChevronLeft } from '@mui/icons-material';
import Customization from '../components/Customization';

const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState(() => localStorage.getItem('selectedTab') || 'about me');
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [paletteOpen, setPaletteOpen] = useState(false);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
    localStorage.setItem('selectedTab', newValue);
    //scroll to top
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const storedTab = localStorage.getItem('selectedTab');
    if (storedTab && storedTab !== selectedTab) {
      setSelectedTab(storedTab);
    }
  }, [selectedTab]);

  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ mb: isMobile ? 7 : 2, px: isMobile ? 1 : 2 }} disableGutters>
        <Grid container spacing={isMobile ? 1 : 2} >

          <Grid size={{ xs: 12, sm: 12, md: 3 }}>
            <Box sx={{ position: { md: 'sticky' }, top: 80 }}>
              <BasicInfo />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 9 }}>
            <Paper variant="outlined" sx={{ p: 2, borderRadius: '8px' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: isMobile ? 0 : 4 }}>
                <Typography variant="h5" color="primary">
                  {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1).replace(' me', ' Me')}
                </Typography>

                {!isMobile && (
                  <Tabs
                    value={selectedTab}
                    onChange={handleChangeTab}
                    indicatorColor="primary"
                    textColor="primary"
                    sx={{
                      borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Tab label="About" value="about me" />
                    <Tab label="Resume" value="resume" />
                    <Tab label="Projects" value="projects" />
                    <Tab label="Blogs" value="blogs" disabled />
                  </Tabs>
                )}
              </Stack>

              <Box sx={{ mt: isMobile ? 1 : 4 }}>
                {selectedTab === 'about me' && <AboutMe />}
                {selectedTab === 'resume' && (<MyResume />)}
                {selectedTab === 'projects' && (<MyPortfolio />)}
                {selectedTab === 'blogs' && (<Blog />)}
              </Box>
            </Paper>
          </Grid>

        </Grid>
      </Container>

      {isMobile && (
        <AppBar position="fixed" elevation={3} sx={{ top: 'auto', bottom: 0, backgroundColor: 'background.default', zIndex: 1300 }}>
          <Tabs
            value={selectedTab}
            onChange={handleChangeTab}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="About" value="about me" />
            <Tab label="Resume" value="resume" />
            <Tab label="Projects" value="projects" />
            <Tab label="Blogs" value="blogs" disabled />
          </Tabs>
        </AppBar>
      )}

      {/* Floating Button to open */}
      {!paletteOpen && (
        <IconButton
          sx={{
            position: 'fixed',
            right: 5,
            top: '50%',
            transform: 'translateX(50%)',
            bgcolor: 'background.default',
            border: '1px solid',
            borderColor: 'divider',
            zIndex: 1301,
            borderRadius: '8px'
          }}
          onClick={() => setPaletteOpen(true)}
        >
          <ChevronLeft />
        </IconButton>
      )}

      <Customization paletteOpen={paletteOpen} setPaletteOpen={setPaletteOpen} />

    </React.Fragment>
  );
};

export default MainPage;