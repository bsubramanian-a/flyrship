import * as React from "react";
import { Container } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import SideMenu from "../../components/SideMenu";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
Subscription.title = "Select the best plan for you";

export default function Subscription() {
  return (
    <Container maxWidth='lg' className='main-margin-wrapper'>
      <div className='side-nav'>
        <SideMenu></SideMenu>
      </div>

      <Grid container spacing={0}>
        <Grid item xs={12}>
          <h1>Select the best plan for you</h1>
        </Grid>

        <Grid item xs={12}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 2, md: 5 }}
            paddingTop='5em'
            paddingBottom='5em'
          >
            <Card className='subscription-card' sx={{ width: "100%" }}>
              <div className='active-plan'>
                <Typography variant='h6' gutterBottom>
                  {"Current Plan"}
                </Typography>
              </div>
              <CardContent>
                <p>Basic</p>
                <h1>$10</h1>
                <p>per month</p>

                <List className='sub-list'>
                  <ListItem>15 Requests</ListItem>
                  <ListItem>Deliver on your location</ListItem>
                  <ListItem>Phone number share</ListItem>
                  <ListItem>Hide email and phone</ListItem>
                </List>
              </CardContent>
              <CardActions className='card-action-padding'>
                <Button
                  variant='contained'
                  size='large'
                  fullWidth
                  className='black-button'
                  style={{
                    padding: "1em 2em",
                    marginTop: "1.5em",
                    marginBottom: "1em",
                  }}
                >
                  Cancel
                </Button>
              </CardActions>

              <div className='active-plan'>
                <Typography variant='p' gutterBottom>
                  {"Expiring on 31-06-2023"}
                </Typography>
              </div>
            </Card>

            <Card className='subscription-card' sx={{ width: "100%" }}>
              <CardContent>
                <p>Advance</p>
                <h1>$30</h1>
                <p>per month</p>

                <List className='sub-list'>
                  <ListItem>25 Requests</ListItem>
                  <ListItem>Deliver on your location</ListItem>
                  <ListItem>Phone number share</ListItem>
                  <ListItem>Hide email and phone</ListItem>
                </List>
              </CardContent>
              <CardActions className='card-action-padding'>
                <Button
                  variant='contained'
                  size='large'
                  fullWidth
                  className='black-button'
                  style={{
                    padding: "1em 2em",
                    marginTop: "1.5em",
                    marginBottom: "1em",
                  }}
                >
                  Select
                </Button>
              </CardActions>
            </Card>

            <Card className='subscription-card' sx={{ width: "100%" }}>
              <CardContent>
                <p>Pro</p>
                <h1>$50</h1>
                <p>per month</p>

                <List className='sub-list'>
                  <ListItem>45 Requests</ListItem>
                  <ListItem>Deliver on your location</ListItem>
                  <ListItem>Phone number share</ListItem>
                  <ListItem>Hide email and phone</ListItem>
                </List>
              </CardContent>
              <CardActions className='card-action-padding'>
                <Button
                  variant='contained'
                  size='large'
                  fullWidth
                  className='black-button'
                  style={{
                    padding: "1em 2em",
                    marginTop: "1.5em",
                    marginBottom: "1em",
                  }}
                >
                  Select
                </Button>
              </CardActions>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
