import * as React from "react";
import { Container } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import SideMenu from "../../components/SideMenu";
import PnrSearch from "../../components/PnrSearch";
import AddListingForm from "../../components/AddListingForm";
import Typography from "@mui/material/Typography";

AddListing.title = "Create New Listings";

export default function AddListing() {
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
        <Grid item xs={12} marginBottom='3em'>
          <h1>{"Add Listing"}</h1>
        </Grid>

        <Grid item xs={12} md={12} lg={12} sm={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={5}>
              <PnrSearch></PnrSearch>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <AddListingForm></AddListingForm>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
