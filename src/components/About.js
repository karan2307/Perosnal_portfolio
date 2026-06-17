import React from 'react';
import { Container, Typography, Box, Grid, Paper, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';

const About = () => {
  const education = [
    {
      degree: "Bachelor's in Information Technology",
      school: "KJ Somaiya College Of Engineering",
      year: "2021 - 2025",
      
    }
    // Add more education items
  ];

  const experience = [
    {
      position: "Software Developer",
      company: "SBI GEBERAL INSURANCE COMPANY LIMITED",
      year: "2023 - Present",
      description: "Application Manager as a Graduate Trainee"
    }
    // Add more experience items
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Box 
      id="about" 
      sx={{ 
        py: 8,
        background: (theme) => `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ mb: 6 }}
          >
            About Me
          </Typography>

          <Grid container spacing={4}>
            {/* Personal Info */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Paper 
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'linear-gradient(135deg, #1a237e 0%, #534bae 100%)',
                    color: 'white',
                  }}
                >
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Avatar
                    src={require('../assets/profile.jpg')}
                      sx={{ 
                        width: 150, 
                        height: 150, 
                        margin: '0 auto',
                        border: '4px solid white'
                      }}
                    >
                      <PersonIcon sx={{ fontSize: 80 }} />
                    </Avatar>
                  </Box>
                  <Typography variant="h5" gutterBottom align="center">
                    Karan Patel
                  </Typography>
                  <Typography variant="body1" paragraph align="center">
                    Full Stack Developer passionate about creating innovative web solutions
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {['React', 'SQL', 'Python', 'Git & Github'].map((skill) => (
                      <Chip 
                        key={skill} 
                        label={skill} 
                        sx={{ 
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.2)',
                          }
                        }} 
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Education & Experience */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                {/* Education Section */}
                <Grid item xs={12}>
                  <motion.div variants={itemVariants}>
                    <Paper 
                      elevation={3}
                      sx={{ 
                        p: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          bgcolor: 'primary.main',
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
                        <Typography variant="h5">Education</Typography>
                      </Box>
                      {education.map((edu, index) => (
                        <Box key={index} sx={{ ml: 4, mb: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            {edu.degree}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary">
                            {edu.school}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {edu.year}
                          </Typography>
                          <Typography variant="body1" sx={{ mt: 1 }}>
                            {edu.description}
                          </Typography>
                        </Box>
                      ))}
                    </Paper>
                  </motion.div>
                </Grid>

                {/* Experience Section */}
                <Grid item xs={12}>
                  <motion.div variants={itemVariants}>
                    <Paper 
                      elevation={3}
                      sx={{ 
                        p: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          bgcolor: 'secondary.main',
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <WorkIcon sx={{ mr: 1, color: 'secondary.main' }} />
                        <Typography variant="h5">Experience</Typography>
                      </Box>
                      {experience.map((exp, index) => (
                        <Box key={index} sx={{ ml: 4, mb: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            {exp.position}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary">
                            {exp.company}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {exp.year}
                          </Typography>
                          <Typography variant="body1" sx={{ mt: 1 }}>
                            {exp.description}
                          </Typography>
                        </Box>
                      ))}
                    </Paper>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 