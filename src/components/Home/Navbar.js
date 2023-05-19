import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const ScrollHome = () => {
    const element = document.getElementById("home");

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const Scrollabout = () => {
    const element = document.getElementById("about");

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const ScrollhowItWorks = () => {
    const element = document.getElementById("how-it-works");

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const ScrollCaseStuies = () => {
    const element = document.getElementById("how-it-works");

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className='main-header'>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  className='mobile-nav-menu'
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={ScrollHome}>Home</MenuItem>
                  <MenuItem onClick={Scrollabout}>About</MenuItem>
                  <MenuItem onClick={ScrollhowItWorks}>How it works</MenuItem>
                  <MenuItem onClick={ScrollCaseStuies}>Case Studies</MenuItem>

                  <MenuItem>
                    <Link href='../../auth/Login' className='full-width'>
                      <Button
                        variant='contained'
                        size='large'
                        fullWidth
                        className='black-button-outline'
                      >
                        Login
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href='../../auth/Signup' className='full-width'>
                      <Button
                        variant='contained'
                        size='large'
                        fullWidth
                        className='black-button'
                      >
                        Sign up
                      </Button>
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant='h5'
                noWrap
                component='a'
                href=''
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "center",
                  display: { xs: "none", md: "flex" },
                }}
              >
                <MenuItem onClick={ScrollHome}>Home</MenuItem>
                <MenuItem onClick={Scrollabout}>About</MenuItem>
                <MenuItem onClick={ScrollhowItWorks}>How it works</MenuItem>
                <MenuItem onClick={ScrollCaseStuies}>Case Studies</MenuItem>
              </Box>

              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", md: "flex", alignItems: "center" },
                }}
              >
                <Link href='../../auth/Login'>
                  <MenuItem>Login</MenuItem>
                </Link>
                <Link href='../../auth/Signup'>
                  <Button
                    variant='contained'
                    size='large'
                    fullWidth
                    className='black-button'
                  >
                    Sign up
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
