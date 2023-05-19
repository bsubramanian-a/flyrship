import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";

export const ContactForm = () => {
  return (
    <div>
      <Box
        component='form'
        className='footer-form-wrapper'
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: {
              xs: "100%", // theme.breakpoints.up('xs')
              sm: "100%", // theme.breakpoints.up('sm')
              md: "47%", // theme.breakpoints.up('md')
              lg: "47%", // theme.breakpoints.up('lg')
              xl: "47%", // theme.breakpoints.up('xl')
            },
          },
        }}
        autoComplete='off'
      >
        <div>
          <TextField
            required
            id='outlined-required'
            variant='standard'
            label='First Name'
          />
          <TextField
            id='outlined-required'
            variant='standard'
            label='Last Name'
          />
        </div>
        <div>
          <TextField
            required
            id='outlined-required'
            variant='standard'
            label='Email Address'
            type='email'
          />
          <TextField
            id='outlined-required'
            variant='standard'
            label='Subject'
          />
        </div>
        <div>
          <TextField
            id='outlined-multiline-static'
            required
            className='enter-subject-input'
            label='Your messgae'
            variant='standard'
            multiline
            fullWidth
            rows={5}
            sx={{ ml: 1 }}
          />
        </div>
        <Button
          variant='contained'
          type='submit'
          fullWidth
          className='form-submit'
        >
          Send Message
        </Button>
      </Box>
    </div>
  );
};
