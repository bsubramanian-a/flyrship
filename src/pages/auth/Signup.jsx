import * as React from "react";
import { Container } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import OnlyLogo from "../../components/OnlyLogo";
import Image from "next/image";

import Google from "../../../public/images/icons/google.svg";
import Facebook from "../../../public/images/icons/facebook.svg";
import Phone from "../../../public/images/icons/phone.svg";
import HrLine from "../../../public/images/icons/line.svg";
import PhoneModal from "../../components/PhoneModal";

Signup.title = "Signup";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 640,
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};
const phoneInputStyle = {
  p: 4,
};

export default function Signup() {
  const [open, setOpen] = React.useState(false);
  const loginPhone = () => setOpen(true);
  const loginPhoneClose = () => setOpen(false);
  return (
    <section className='signup-bg'>
      <Container maxWidth='lg'>
        <OnlyLogo></OnlyLogo>

        <Grid container spacing={0} marginTop='2em'>
          <Grid item xs={12}>
            <h1>Hello!</h1>
          </Grid>

          <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
            <Stack
              spacing={2}
              marginTop='4em'
              direction={{ xs: "column", sm: "row" }}
            >
              <Button className='white-button' fullWidth>
                <Image
                  alt='Google'
                  src={Google}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "1em",
                  }}
                />
                Login with Google
              </Button>
              <Button className='white-button' fullWidth>
                <Image
                  alt='Facebook'
                  src={Facebook}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "1em",
                  }}
                />
                Login with Facebook
              </Button>
            </Stack>
            <Box
              sx={{
                display: "flex",
                gap: 4,
                flexWrap: "wrap",
                marginTop: "1em",
                justifyContent: "space-between",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                marginTop: "2em",
              }}
            >
              <Image
                alt='Divider'
                src={HrLine}
                style={{
                  width: "200px",
                  margin: "auto",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                marginTop: "2em",
              }}
            >
              <Button
                size='md'
                variant='soft'
                className='white-button'
                fullWidth
                onClick={loginPhone}
              >
                <Image
                  alt='Phone Login'
                  src={Phone}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "1em",
                  }}
                />
                Login with Phone Number
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                marginTop: "2em",
              }}
            >
              <Image
                alt='Divider'
                src={HrLine}
                style={{
                  width: "200px",
                  margin: "auto",
                }}
              />
            </Box>

            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  id='first-name'
                  fullWidth
                  required
                  label='First Name'
                  variant='outlined'
                  className='form-inputs'
                />
                <TextField
                  id='emai-address'
                  fullWidth
                  required
                  label='Email Address'
                  type={"email"}
                  variant='outlined'
                  className='form-inputs'
                />
                <TextField
                  id='password'
                  fullWidth
                  required
                  label='Password'
                  type={"password"}
                  variant='outlined'
                  className='form-inputs'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='last-name'
                  fullWidth
                  label='Last Name'
                  variant='outlined'
                  className='form-inputs'
                />
                <TextField
                  id='phone-number'
                  fullWidth
                  label='Phone Number'
                  type={"number"}
                  variant='outlined'
                  className='form-inputs'
                />
                <TextField
                  id='confirm-password'
                  fullWidth
                  required
                  label='Confirm Password'
                  type={"password"}
                  variant='outlined'
                  className='form-inputs'
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: grey[900],
                          "&.Mui-checked": { color: grey[900] },
                        }}
                      />
                    }
                    label='By clicking this you agree to our Terms and Conditions and Privacy policy.'
                  />
                </FormGroup>
                <Link href='../dashboard/Index'>
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
                    Sign up
                  </Button>
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                textAlign='center'
                sx={{ paddingBottom: "2em" }}
              >
                <h5>
                  Already member? <Link href='Login'>Login</Link>
                </h5>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* Phone login modal start */}
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={loginPhoneClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle} className='responsive-modal2'>
            <PhoneModal></PhoneModal>
          </Box>
        </Fade>
      </Modal>
    </section>
  );
}
