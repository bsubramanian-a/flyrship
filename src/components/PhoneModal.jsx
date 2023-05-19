import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/joy/Grid";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Image from "next/image";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import HrLine from "../../public/images/icons/line.svg";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const phoneInputStyle = {
  p: 4,
};

export default function PhoneModal() {
  const [open, setOpen] = React.useState(false);
  const loginPhone = () => setOpen(true);
  const loginPhoneClose = () => setOpen(false);
  return (
    <>
      <Typography id='transition-modal-title' variant='h6' component='h2'>
        Login With Phone Number
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12}>
          <Box className='phone-wrapper'>
            <PhoneInput
              inputProps={{
                name: "phone",
                required: true,
                country: "us",
                enableSearch: true,
                placeholder: "Enter Phone Number",
                autoFocus: true,
                width: "100%",
              }}
            />
          </Box>
          <Button
            variant='outlined'
            fullWidth
            color='error'
            style={{
              padding: "1em 2em",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          >
            Send OTP
          </Button>
        </Grid>
        <Image
          alt='Divider'
          src={HrLine}
          style={{
            width: "200px",
            margin: "auto",
          }}
        />
        <Grid xs={12} paddingTop='2em'>
          <TextField
            id='outlined-basic'
            fullWidth
            label='Enter OTP'
            variant='outlined'
            type={"number"}
            maxLength={"5"}
            className='form-inputs'
          />
          <Button
            variant='contained'
            size='large'
            fullWidth
            className='black-button'
            style={{
              padding: "1em 2em",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
