import * as React from "react";
import { Container, FormControl } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import Alert from "@mui/material/Alert";
import OnlyLogo from "../../components/OnlyLogo";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
PasswordRecovery.title = "Recover Password";
export default function PasswordRecovery() {
  return (
    <section className='signup-bg'>
      <Container maxWidth='lg'>
        <OnlyLogo></OnlyLogo>

        <Grid container spacing={0} marginTop='5em'>
          <Grid item xs={8}>
            <h1>Recove your password!</h1>
          </Grid>

          <Grid xs={12} md={6}>
            <Grid container spacing={2} marginTop={5}>
              <Grid item xs={12} md={12}>
                <TextField
                  id='outlined-basic'
                  fullWidth
                  label='Enter your email address'
                  variant='outlined'
                  className='form-inputs'
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Link href='SendCode'>
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
                    Send Code
                  </Button>
                </Link>
                <Alert severity='success'>
                  Success! We have sent a digit code to your email address. Use
                  the code to reset your password.
                </Alert>
                <Alert severity='error'>
                  Sorry! no account is associated with this email address.
                  please check your email address again.
                </Alert>
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
