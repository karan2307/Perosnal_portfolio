import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion, useScroll } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 50));
  }, [scrollY]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: isScrolled ? 'white' : 'transparent',
          boxShadow: isScrolled ? 1 : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                color: isScrolled ? 'black' : 'white',
                marginLeft: 'auto'
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ 
                    color: isScrolled ? 'black' : 'white',
                    '&:hover': {
                      color: theme.palette.primary.main
                    }
                  }}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem 
              button 
              key={item}
              onClick={() => scrollToSection(item)}
            >
              <Typography>{item}</Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </motion.div>
  );
};

export default Navbar;