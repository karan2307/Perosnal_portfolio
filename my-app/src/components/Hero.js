import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import backgroundImage from '../assets/hero-bg.jpg'; // You'll need to add this image

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: `linear-gradient(rgba(26, 35, 126, 0.9), rgba(83, 75, 174, 0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography 
            variant="h1" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '3rem', md: '4.5rem' },
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Karan Patel
          </Typography>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Typography 
              variant="h2" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '1.5rem', md: '2.5rem' },
                fontWeight: 500,
                mb: 4
              }}
            >
              Full Stack Developer
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'secondary.main',
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                },
                mr: 2,
              }}
              href="#projects"
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'secondary.main',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
              href="#contact"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </Container>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
      </motion.div>
    </Box>
  );
};

export default Hero;