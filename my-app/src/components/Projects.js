import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Box, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      image: "https://source.unsplash.com/800x600/?ecommerce,website",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates using Socket.io and React.",
      image: "https://source.unsplash.com/800x600/?task,management",
      technologies: ["React", "Socket.io", "Node.js", "PostgreSQL"],
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
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
                          <LaunchIcon />
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