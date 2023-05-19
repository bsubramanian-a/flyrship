import * as React from "react";
import { Container, FormControl } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Link from "next/link";
import Alert from "@mui/material/Alert";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import OnlyLogo from "../../components/OnlyLogo";

ChangePassword.title = "Create Password";
export default function ChangePassword() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <section className='signup-bg'>
      <Container maxWidth='lg'>
        <OnlyLogo></OnlyLogo>

        <Grid container spacing={0} marginTop='5em'>
          <Grid item xs={8}>
            <h1>Create your new password!</h1>
          </Grid>

          <Grid xs={12} md={6}>
            <Grid container spacing={2} marginTop={5}>
              <Grid item xs={12} md={12}>
                <FormControl variant='outlined'>
                  <InputLabel
                    htmlFor='outlined-adornment-password'
                    sx={{ marginBottom: "1em" }}
                  >
                    Enter New Password
                  </InputLabel>
                  <OutlinedInput
                    id='outlined-adornment-password'
                    type={showPassword ? "text" : "password"}
                    className='form-inputs'
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <FormControl variant='outlined'>
                  <InputLabel
                    htmlFor='outlined-adornment-password'
                    sx={{ marginBottom: "1em" }}
                  >
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id='outlined-adornment-password'
                    type={showPassword ? "text" : "password"}
                    className='form-inputs'
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12}>
                <Link href='Login'>
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
                    Set Password
                  </Button>
                </Link>
                <Alert severity='success'>
                  Success! You have successfully created your new password. You
                  can now login to your account with your new password.
                </Alert>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
