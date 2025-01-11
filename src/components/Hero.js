import React from 'react';
import { Container, Typography, Box, Button, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: `linear-gradient(rgba(26, 35, 126, 0.9), rgba(83, 75, 174, 0.9)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} md={8}>
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
          </Grid>
          
          {/* Profile Photo with enhanced styling */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -3,
                    left: -3,
                    right: -3,
                    bottom: -3,
                    background: 'linear-gradient(45deg, #ff3d00, #1a237e)',
                    borderRadius: '50%',
                    zIndex: 0,
                    animation: 'spin 4s linear infinite',
                    '@keyframes spin': {
                      '0%': {
                        transform: 'rotate(0deg)',
                      },
                      '100%': {
                        transform: 'rotate(360deg)',
                      },
                    },
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: -6,
                    left: -6,
                    right: -6,
                    bottom: -6,
                    background: 'linear-gradient(45deg, #1a237e, #ff3d00)',
                    borderRadius: '50%',
                    zIndex: -1,
                    filter: 'blur(10px)',
                    opacity: 0.5,
                  },
                }}
              >
                <Avatar
                  src={profileImage}
                  sx={{
                    width: { xs: 200, md: 300 },
                    height: { xs: 200, md: 300 },
                    margin: '0 auto',
                    border: '4px solid white',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease-in-out',
                    background: '#fff',
                    '&:hover': {
                      boxShadow: '0 0 30px rgba(0,0,0,0.5)',
                    },
                    '@media (max-width: 600px)': {
                      width: 200,
                      height: 200,
                    },
                  }}
                />
              </Box>
              
              
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: i % 2 ? '#ff3d00' : '#1a237e',
                    }}
                    animate={{
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
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