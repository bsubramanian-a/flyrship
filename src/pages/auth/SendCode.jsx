import * as React from "react";
import { Container, FormControl } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import OnlyLogo from "../../components/OnlyLogo";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
SendCode.title = "Enter verification code";
export default function SendCode() {
  return (
    <section className='signup-bg'>
      <Container maxWidth='lg'>
        <OnlyLogo></OnlyLogo>

        <Grid container spacing={0} marginTop='5em'>
          <Grid item xs={8}>
            <h1>Enter Verification Code!</h1>
          </Grid>

          <Grid xs={12} md={6}>
            <Grid container spacing={2} marginTop={5}>
              <Grid item xs={12} md={12}>
                <TextField
                  id='use-code'
                  fullWidth
                  required
                  inputProps={{ maxLength: 6 }}
                  type={"text"}
                  label='Enter verification code'
                  variant='outlined'
                  className='form-inputs'
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Link href='ChangePassword'>
                  <Button
                    variant='contained'
                    size='large'
                    fullWidth
                    className='black-button'
                    style={{
                      padding: "1em 2em",
                      marginTop: ".1em",
                      marginBottom: "1em",
                    }}
                  >
                    Change Password
                  </Button>
                </Link>
              </Grid>

              <Grid item xs={12} md={12} textAlign='center'>
                <h5>
                  Already member? <Link href='Login'>Login</Link>
                </h5>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
