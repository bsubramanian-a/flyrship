import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";

import search_for_traveller from "../../../public/images/search_for_traveller.svg";
import offer_services from "../../../public/images/offer_services.svg";
import get_it_done from "../../../public/images/get_it_done.svg";

export const HowItWorks = () => {
  return (
    <div className='how-it-works-bg' id='how-it-works'>
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant='h3' gutterBottom mb='.5em' fontWeight='800'>
              How it works
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={"space-between"}
            >
              <Card
                className='home-card-border'
                sx={{
                  maxWidth: 450,
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Box sx={{ mt: "1.5em" }}>
                    <Image
                      alt='How it works'
                      src={search_for_traveller}
                      style={{
                        height: "248px",
                      }}
                    />
                  </Box>
                  <Typography
                    variant='h6'
                    gutterBottom
                    mt='1.5em'
                    mb='1em'
                    fontWeight='bold'
                  >
                    Search for Traveller
                  </Typography>
                  <Typography
                    variant='p'
                    gutterBottom
                    fontWeight='500'
                    sx={{ color: "#525252", display: "block" }}
                  >
                    Nullam tincidunt mi in turpis vestibulum, nec pretium erat
                    pellentesque. Nulla bibendum congue scelerisque.
                  </Typography>
                </CardContent>
              </Card>

              <Card
                className='home-card-border'
                sx={{
                  maxWidth: 450,
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Box sx={{ mt: "1.5em" }}>
                    <Image
                      alt='How it works'
                      src={offer_services}
                      style={{
                        height: "248px",
                      }}
                    />
                  </Box>
                  <Typography
                    variant='h6'
                    gutterBottom
                    mt='1.5em'
                    mb='1em'
                    fontWeight='bold'
                  >
                    Offer Services
                  </Typography>
                  <Typography
                    variant='p'
                    gutterBottom
                    fontWeight='500'
                    sx={{ color: "#525252", display: "block" }}
                  >
                    Nullam tincidunt mi in turpis vestibulum, nec pretium erat
                    pellentesque. Nulla bibendum congue scelerisque.
                  </Typography>
                </CardContent>
              </Card>

              <Card
                className='home-card-border'
                sx={{
                  maxWidth: 450,
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Box sx={{ mt: "1.5em" }}>
                    <Image
                      alt='How it works'
                      src={get_it_done}
                      style={{
                        height: "248px",
                      }}
                    />
                  </Box>
                  <Typography
                    variant='h6'
                    gutterBottom
                    mt='1.5em'
                    mb='1em'
                    fontWeight='bold'
                  >
                    Get it Done
                  </Typography>
                  <Typography
                    variant='p'
                    gutterBottom
                    fontWeight='500'
                    sx={{ color: "#525252", display: "block" }}
                  >
                    Nullam tincidunt mi in turpis vestibulum, nec pretium erat
                    pellentesque. Nulla bibendum congue scelerisque.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
