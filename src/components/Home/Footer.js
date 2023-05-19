import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Divider from "@mui/joy/Divider";
import Image from "next/image";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import AboutUsImg from "../../../public/images/about_us.png";
import { ContactForm } from "./ContactForm";

const Footer = () => {
  return (
    <div className='footer-bg' id='footer'>
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className='playerDiv'>
              <Box
                component='ul'
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  p: 0,
                  m: 0,
                }}
              >
                <Card
                  component='li'
                  className='footer-card'
                  sx={{
                    minWidth: 300,
                    flexGrow: 1,
                    height: 500,
                  }}
                >
                  <CardCover>
                    <video
                      autoPlay
                      controls
                      className='footer-video-wrap'
                      loop
                      muted
                      poster='https://assets.codepen.io/6093409/river.jpg'
                    >
                      <source
                        src='https://assets.codepen.io/6093409/river.mp4'
                        type='video/mp4'
                      />
                    </video>
                  </CardCover>
                </Card>
              </Box>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent={"space-around"}
          alignItems={"center"}
          sx={{ mt: "5em !important" }}
        >
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Typography variant='h3' gutterBottom mb='.5em' fontWeight='bold'>
              Let’s get<br></br> Connected
            </Typography>
            <Typography variant='p' gutterBottom mb='.5em' fontWeight='500'>
              Nullam tincidunt mi in turpis vestibulum, nec pretium erat
              pellentesque. Nulla bibendum congue scelerisque.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ContactForm></ContactForm>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 5, mb: 2 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            pb: 2,
          }}
        >
          <Typography
            className='footer-copy'
            gutterBottom
            mb='.5em'
            fontWeight='600'
          >
            Copyright © {new Date().getFullYear()} Company
          </Typography>
          <Typography
            className='footer-copy'
            gutterBottom
            mb='.5em'
            fontWeight='600'
            sx={{ ml: "auto" }}
          >
            Copyright 2022
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
