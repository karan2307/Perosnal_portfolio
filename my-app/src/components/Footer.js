import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  const socialLinks = [
    {
      icon: <GitHubIcon />,
      url: 'https://github.com/your-github',
      label: 'GitHub'
    },
    {
      icon: <LinkedInIcon />,
      url: 'https://linkedin.com/in/your-linkedin',
      label: 'LinkedIn'
    },
    {
      icon: <TwitterIcon />,
      url: 'https://twitter.com/your-twitter',
      label: 'Twitter'
    },
    {
      icon: <EmailIcon />,
      url: 'mailto:your.email@example.com',
      label: 'Email'
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 6,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: (theme) => theme.palette.secondary.main,
        }
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Karan Patel
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Building digital experiences that matter
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          mt={3}
          mb={4}
        >
          {socialLinks.map((link) => (
            <IconButton
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                '&:hover': {
                  color: 'secondary.main',
                  transform: 'translateY(-3px)',
                  transition: 'all 0.3s ease-in-out',
                },
              }}
              aria-label={link.label}
            >
              {link.icon}
            </IconButton>
          ))}
        </Stack>
        
      </Container>
    </Box>
  );
};

export default Footer;