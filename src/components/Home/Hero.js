import PropTypes from "prop-types";
import React, { Component } from "react";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Hero_Girl from "../../../public/images/hero_girl.png";

export class Hero extends Component {
  static propTypes = {};

  render() {
    return (
      <div className='hero-wrapper' id='home'>
        <Container maxWidth='xl'>
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant='h2' gutterBottom mb='.5em' fontWeight='bold'>
                Simplify your life by receiving goods with ease!
              </Typography>
              <Typography
                variant='p'
                gutterBottom
                mb='.5em'
                fontWeight='500'
                sx={{
                  width: {
                    xs: "100%", // theme.breakpoints.up('xs')
                    sm: "100%", // theme.breakpoints.up('sm')
                    md: "100%", // theme.breakpoints.up('md')
                    lg: 550, // theme.breakpoints.up('lg')
                    xl: 550, // theme.breakpoints.up('xl')
                  },
                  display: "block",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus ultrices leo in lacus porttitor
              </Typography>
              <Paper
                component='form'
                sx={{
                  p: "10px 4px",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "2.5em",
                  width: {
                    xs: "100%", // theme.breakpoints.up('xs')
                    sm: "100%", // theme.breakpoints.up('sm')
                    md: "100%", // theme.breakpoints.up('md')
                    lg: 550, // theme.breakpoints.up('lg')
                    xl: 550, // theme.breakpoints.up('xl')
                  },
                  borderRadius: "35px",
                  boxShadow: "none",
                  bgcolor: "#000",
                  border: "0px solid #000",
                  color: "#fff",
                }}
              >
                <InputBase
                  label='Outlined'
                  variant='outlined'
                  sx={{ ml: 2, flex: 1, color: "#fff" }}
                  placeholder='Search listing...'
                  inputProps={{ "aria-label": "Search listing..." }}
                />

                <Button
                  sx={{
                    p: "10px 4px",
                    marginRight: "10px",
                    width: "150px",
                    borderRadius: "35px",
                    color: "#000",
                    fontWeight: "700",

                    background:
                      "linear-gradient(180deg, #52DC91 6.67%, #77FFB5 100%);",
                    textTransform: "capitalize",
                    boxShadow: "none",
                    border: "0px solid #000;",
                    ":hover": {
                      background:
                        "linear-gradient(180deg, #77FFB5 6.67%, #52DC91 100%);",
                    },
                  }}
                >
                  Search
                </Button>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: {
                  xs: "none", // theme.breakpoints.up('xs')
                  sm: "none", // theme.breakpoints.up('sm')
                  md: "block", // theme.breakpoints.up('md')
                  lg: "block", // theme.breakpoints.up('lg')
                  xl: "block", // theme.breakpoints.up('xl')
                },
              }}
            >
              <Image
                alt='Main Image'
                src={Hero_Girl}
                sizes='100vw'
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Hero;
