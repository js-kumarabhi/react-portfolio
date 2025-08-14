import { Avatar, Box, Grid, Grow, Typography } from '@mui/material';
import { Code, Web, DesignServices, Api, Devices, Widgets } from '@mui/icons-material';
import whatido from '../data/whatido.json';

// Map titles to icons
const iconsMap = {
  "Web Development": <Web color='primary' />,
  "UI/UX Design": <DesignServices color='primary' />,
  "API Integration": <Api color='primary' />,
  "Frontend Frameworks": <Code color='primary' />,
  "Responsive Design": <Devices color='primary' />,
  "WordPress Personalization": <Widgets color='primary' />
};

const AboutMe = () => {
  return (
    <Box>
      {/* About Me Intro */}
      <Typography variant="body1" mb={2}>
        I’m a frontend developer with 2 years of experience creating websites that are not only visually appealing but also effortless to use. I enjoy turning ideas into interactive, responsive, and engaging digital experiences.
      </Typography>
      <Typography variant="body1" mb={2}>
        From sleek eCommerce sites to dynamic social platforms, my focus is on blending beauty with usability. I’m always eager to learn, improve, and bring fresh ideas to life with every project I take on.
      </Typography>

      {/* Section Title */}
      <Typography variant="h6" mt={4} mb={2}>
        What I Do:
      </Typography>

      {/* Services Grid */}
      <Grid container spacing={2}>
        {whatido.services.map((service, index) => (
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={500 + index * 100}
             key={index}
          >
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
              <Box sx={{ p: 2, display: 'flex', gap: 2, height: '100%', backgroundColor: 'background.default', borderRadius: '8px' }}>
                <Avatar variant="square" sx={{ borderRadius: "8px", backgroundColor: 'background.paper' }}>
                  {iconsMap[service.title] || <Code />}
                </Avatar>
                <Box>
                  <Typography variant="body1" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grow>
        ))}
      </Grid>

      {/* Footer Note */}
      <Typography
        variant="body2"
        mt={4}
        color="textSecondary"
        sx={{ fontStyle: 'italic' }}
      >
        With a keen eye for detail and a commitment to staying updated with the latest trends, I strive to deliver solutions that are both innovative and user-centric as of August 10, 2025.
      </Typography>
    </Box>
  );
};

export default AboutMe;
