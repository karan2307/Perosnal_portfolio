import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Box, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

import CodeIcon from '@mui/icons-material/Code';

const Projects = () => {
  const projects = [
    {
      title: "Brand2Parent",
      description: "A full-stack web application that helps retail investors discover the true corporate ownership behind products and brands they use every day.",
      image: "https://imgs.search.brave.com/5trXqw5N6QDLJCDk5g55v7bURHkHYTFdSX1Tf00szho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/ODIyNTM5OC9waG90/by9tYXJrZXQtYW5h/bHl6ZS13aXRoLWRp/Z2l0YWwtbW9uaXRv/ci1mb2N1cy1vbi10/aXAtb2YtZmluZ2Vy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0zRkd3NEhDYVk2/R3FZVzhScUZrN1Fz/UHRaaHFueVNfMklh/MU9hUUpSMzFJPQ",
      technologies: ["Java", "Node.js", "Springboot", "React.js"],
      github: "https://github.com/karan2307/brand2parent",
      
    },
    {
      title: "PregaNewz",
      description: "A web application that provides personalized pregnancy-related news and information to expectant mothers based on their due date and preferences.",
      image: "https://imgs.search.brave.com/HOp-8bgtjemzl-sS00m1J7AY7eP9840rdr520y2WVZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY4/NDM5ODUwMS92ZWN0/b3IvaGVhbHRoLWNh/cmUtZm9yLXdvbWVu/LW9mLXJlcHJvZHVj/dGl2ZS1hZ2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUdF/S0lIY1pSbk9PUlky/STNGNFBMcXVlZDNP/QTFlVnV1SGNnRmtP/clR2OU09",
      technologies: ['HTML', "React.js", "Chatbot"],
      github: "https://github.com/karan2307/PregaNewz",
      
    },
    {
      title: "Donation Tracker",
      description: "A web application that helps users track and manage their donations to various charitable organizations.",
      image: "https://imgs.search.brave.com/QI2gtBDxMkHmR2JjmRyVpro9giq1R2j0vBjEFCGpeiU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDEv/ODgwLzA0OS9zbWFs/bC92b2x1bnRlZXJz/LWNvbGxlY3Rpbmct/ZG9uYXRpb25zLWZv/ci1jaGFyaXR5LWZy/ZWUtdmVjdG9yLmpw/Zw",
      technologies: ['Django'],
      github: "https://github.com/karan2307/Yuva",
      
    },
    // Add more projects
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        bgcolor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.dark}22 0%, ${theme.palette.primary.light}11 100%)`,
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
            My Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    elevation={4}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0,0,0,0.3)',
                        }
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            icon={<CodeIcon />}
                            sx={{
                              bgcolor: 'primary.main',
                              color: 'white',
                              '&:hover': {
                                bgcolor: 'primary.dark',
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                      <Box>
                        <IconButton
                          href={project.github}
                          target="_blank"
                          aria-label="GitHub"
                          sx={{
                            color: 'text.secondary',
                            '&:hover': { color: 'primary.main' }
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                        <IconButton
                          href={project.demo}
                          target="_blank"
                          aria-label="Live Demo"
                          sx={{
                            color: 'text.secondary',
                            '&:hover': { color: 'primary.main' }
                          }}
                        >
                          
                        </IconButton>
                      </Box>
                      <Button
                        variant="contained"
                        size="small"
                        href={project.demo}
                        target="_blank"
                        sx={{
                          bgcolor: 'secondary.main',
                          '&:hover': {
                            bgcolor: 'secondary.dark',
                          }
                        }}
                      >
                        View Project
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 