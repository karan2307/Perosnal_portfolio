import React from 'react';
import { Container, Typography, Box, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
// import BrushIcon from '@mui/icons-material/Brush';
// import BuildIcon from '@mui/icons-material/Build';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 60 },
        { name: 'HTML/CSS', level: 90 },
        
      ]
    },
    {
      title: 'Backend Development',
      icon: <StorageIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'Springboot', level: 40 },
        { name: 'SQL', level: 95 },
      ]
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        bgcolor: 'background.paper',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.light}11 0%, ${theme.palette.secondary.light}11 100%)`,
        }
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
            Skills & Expertise
          </Typography>

          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      height: '100%',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      {category.icon}
                      <Typography variant="h5" sx={{ ml: 2 }}>
                        {category.title}
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      {category.skills.map((skill, skillIndex) => (
                        <Box key={skillIndex} sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body1">
                              {skill.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {skill.level}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              bgcolor: 'grey.200',
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 4,
                                background: (theme) => 
                                  `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                              }
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 