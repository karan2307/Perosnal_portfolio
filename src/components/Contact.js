import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      detail: 'karankpatel@gmail.com',
      link: 'mailto:karankpatel@gmail.com'
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Location',
      detail: 'Navi Mumbai, India'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Phone',
      detail: '9819890868',
      link: 'tel:+919819890868'
    }
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatusMessage('Please fill in all fields before sending.');
      return;
    }

    setIsSending(true);
    setStatusMessage('Sending message...');

    try {
      const serviceId = 'service_lss1tdn';
      const templateId = 'template_iurb8ii';
      const publicKey = 'BYAKlzqCjqbO48gVT';
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatusMessage('Message sent successfully! I will reply soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setStatusMessage(`Unable to send message right now. ${error?.text || error?.message || ''}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: 8, 
        background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{ mb: 6 }}
          >
            Get In Touch
          </Typography>

          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: { xs: 4, md: 0 } }}>
                <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          p: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                          }
                        }}
                      >
                        {info.icon}
                        <Box>
                          <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                            {info.title}
                          </Typography>
                          <Typography 
                            component={info.link ? 'a' : 'p'}
                            href={info.link}
                            sx={{ 
                              color: 'white',
                              textDecoration: 'none',
                              '&:hover': {
                                color: 'secondary.light'
                              }
                            }}
                          >
                            {info.detail}
                          </Typography>
                        </Box>
                      </Paper>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={8}>
              <Paper 
                elevation={3}
                sx={{
                  p: 4,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)'
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)'
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.7)'
                          },
                          '& .MuiInputBase-input': {
                            color: 'white'
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)'
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)'
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.7)'
                          },
                          '& .MuiInputBase-input': {
                            color: 'white'
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)'
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)'
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.7)'
                          },
                          '& .MuiInputBase-input': {
                            color: 'white'
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.3)'
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255, 255, 255, 0.5)'
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.7)'
                          },
                          '& .MuiInputBase-input': {
                            color: 'white'
                          }
                        }}
                      />
                    </Grid>
                  </Grid>

                  {statusMessage && (
                    <Typography sx={{ mt: 2, color: 'white', textAlign: 'center' }}>
                      {statusMessage}
                    </Typography>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      disabled={isSending}
                      variant="contained"
                      sx={{
                        mt: 4,
                        mb: 2,
                        py: 1.5,
                        bgcolor: 'secondary.main',
                        '&:hover': {
                          bgcolor: 'secondary.dark'
                        }
                      }}
                    >
                      {isSending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 