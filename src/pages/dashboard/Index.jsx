import * as React from "react";
import { Container } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import SideMenu from "../../components/SideMenu";

Index.title = "My Listings";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Index() {
  return (
    <Container maxWidth='lg' className='main-margin-wrapper'>
      <div className='side-nav'>
        <SideMenu></SideMenu>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className='fixed-right'
      >
        <Grid item xs={10}>
          <h2>My Listing</h2>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <Stack spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
