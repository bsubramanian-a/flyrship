import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Image from "next/image";
import AboutUsImg from "../../../public/images/about_us.png";

const AboutUs = () => {
  return (
    <div className='section-bg' id='about'>
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Image
              alt='About Us'
              src={AboutUsImg}
              width={707}
              height={610}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
            <Typography variant='h3' gutterBottom mb='.5em' fontWeight='bold'>
              About us
            </Typography>

            <Typography
              variant='p'
              gutterBottom
              fontWeight='400'
              sx={{ color: "#525252", display: "block" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices leo in lacus porttitor, vel aliquet nisl bibendum. Nunc
              mattis, libero quis aliquet pretium, tellus felis vestibulum odio,
              vel laoreet elit sem quis est. Duis fringilla turpis ac ex iaculis
              bibendum. Quisque tristique varius finibus. Duis sit amet
              venenatis tellus, at dictum purus. Etiam commodo odio diam, eget
              placerat purus euismod eu. Maecenas nulla lectus, vehicula rutrum
              tincidunt quis, placerat vitae ipsum.
            </Typography>

            <Button
              variant='contained'
              size='large'
              className='green-button'
              sx={{
                width: {
                  xs: "100%", // theme.breakpoints.up('xs')
                  sm: "100%", // theme.breakpoints.up('sm')
                  md: "174px", // theme.breakpoints.up('md')
                  lg: "174px", // theme.breakpoints.up('lg')
                  xl: "174px", // theme.breakpoints.up('xl')
                },
                display: "block",
              }}
              style={{
                padding: "1em 2em",
                marginTop: "1.5em",

                marginBottom: "1em",
              }}
            >
              Learn more
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
