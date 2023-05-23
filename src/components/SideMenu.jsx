import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import InboxIcon from "@mui/icons-material/Inbox";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AccountMenu from "./AccountMenu";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import Collapse from "@mui/material/Collapse";
import OnlyLogo from "./OnlyLogo";
import Link from "next/link";

import "@fontsource/manrope";
import { Divider } from "@mui/joy";
import { padding } from "@mui/system";
import { useRouter } from "next/router";

const drawerWidth = 320;

function SideMenu(props) {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push('/auth/Login');
  };

  const drawer = (
    <div className='border-0'>
      <div className='text-center'>
        <OnlyLogo></OnlyLogo>
      </div>

      <List className='sidebar-nav'>
        <Link href='Index'>
          <ListItemButton>
            <ListItemIcon>
              <GridViewOutlinedIcon style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItemButton>
        </Link>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <BusinessCenterOutlinedIcon style={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary='Traveler' />
          {open ? (
            <ExpandLess style={{ color: "black" }} />
          ) : (
            <ExpandMore style={{ color: "black" }} />
          )}
        </ListItemButton>
        <Collapse
          in={open}
          timeout='auto'
          unmountOnExit
          className='menu-collapse'
        >
          <List component='div'>
            <Link href='MyListing'>
              <ListItemButton>
                <ListItemText primary='My Listing' />
              </ListItemButton>
            </Link>
            <Link href='AddListing'>
              <ListItemButton>
                <ListItemText primary='Add Listing' />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
        <Link href='MyRequest'>
          <ListItemButton>
            <ListItemIcon>
              <LiveHelpOutlinedIcon style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary='My Request' />
          </ListItemButton>
        </Link>
        <Link href='Subscription'>
          <ListItemButton>
            <ListItemIcon>
              <CreditCardOutlinedIcon style={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary='Subscription' />
          </ListItemButton>
        </Link>
      </List>
      <div className='bottom-sidemennu-content'>
        <nav aria-label='main mailbox folders'>
          <List>
            <ListItem disablePadding>
              <Link href='ProfileSettings'>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleOutlinedIcon style={{ color: "#ff4141" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary='Profile Settings'
                    style={{ color: "black" }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding onClick={handleLogout}>
              <ListItemButton>
                <ListItemIcon>
                  <ExitToAppOutlinedIcon style={{ color: "#ff4141" }} />
                </ListItemIcon>
                <ListItemText
                  primary='Log out'
                  style={{ color: "#ff4141" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider></Divider>
        <div className='text-center' style={{ padding: "1.5em" }}>
          <h6>{"App version - 1.0"}</h6>
          <h6>Copyright © {new Date().getFullYear()} Company</h6>
        </div>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className='top-menu-navigation' position='fixed'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: "#000", display: { sm: "block" } }}
            >
              <MenuIcon />
            </IconButton>
            <Grid container spacing={2}>
              <Grid item xs={6} md={10}></Grid>
              <Grid item xs={12} md={2}>
                <AccountMenu></AccountMenu>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Box component='nav' aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "blok", sm: "block", md: "none" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "none", md: "block", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

SideMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideMenu;
