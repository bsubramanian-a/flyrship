import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link"


export default function OnlyLogo() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: '1em', paddingBottom: '1em' }}>
    <Typography variant="h4" color="inherit" component="div">
    <Link href="/">
          Flyrship
          </Link>
          </Typography>
    </Box>
  );
}
