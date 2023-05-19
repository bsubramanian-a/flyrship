import React, { useState, useMemo } from "react";
import { Container } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import SideMenu from "../../components/SideMenu";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import countries from "i18n-iso-countries";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
// Import the languages you want to use
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

ProfileSettings.title = "Profile Settings";
const [state, setState] = React.useState({
  open: false,
  vertical: "top",
  horizontal: "center",
});
const { vertical, horizontal, open } = state;

const handleClick = (newState) => () => {
  setState({ open: true, ...newState });
};

const handleClose = () => {
  setState({ ...state, open: false });
};
export default function ProfileSettings() {
  const [state, setState] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
    setCountry(event.target.value);
  };
  const [value, setValue] = useState("");

  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (value) => setSelectedCountry(value);

  // Have to register the languages you want to use
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);

  // Returns an object not a list
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth='lg' className='main-margin-wrapper'>
      <div className='side-nav'>
        <SideMenu></SideMenu>
      </div>

      <Grid
        container
        rowSpacing={11}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className='fixed-right'
      >
        <Grid item xs={12}>
          <h1>{"Profile Settings"}</h1>
        </Grid>

        <Grid item xs={12} md={12} lg={12} sm={12}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={6}>
              <Card sx={{ minWidth: 275 }} className='custom-card'>
                <CardContent>
                  <Stack direction='row' spacing={2} mt={2}>
                    <TextField
                      id='outlined-basic'
                      fullWidth
                      disabled
                      placeholder='Enter First Name'
                      label='First Name'
                      defaultValue='Lilly'
                      variant='outlined'
                      className='form-inputs'
                    />
                    <TextField
                      id='outlined-basic'
                      fullWidth
                      disabled
                      placeholder='Enter Last Name'
                      label='Last Name'
                      defaultValue='Chang'
                      variant='outlined'
                      className='form-inputs'
                    />
                  </Stack>
                  <Stack direction='row' spacing={2} mt={1}>
                    <TextField
                      id='outlined-basic'
                      fullWidth
                      disabled
                      type='email'
                      placeholder='Enter Email Address'
                      label='Email Address'
                      defaultValue='lilly@demo.com'
                      variant='outlined'
                      className='form-inputs'
                    />
                    <TextField
                      id='outlined-basic'
                      fullWidth
                      disabled
                      placeholder='Enter Phone Number'
                      label='Phone Number'
                      defaultValue='+91-2547896324'
                      variant='outlined'
                      className='form-inputs'
                    />
                  </Stack>
                  <Stack direction='row' spacing={10} mt={0}>
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
                      label='Want to show my email publicly.'
                    />
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
                      label='Want to show my phone number publicly.'
                    />
                  </Stack>

                  <Stack direction='row' spacing={2} mt={3}>
                    <TextField
                      id='outlined-basic'
                      fullWidth
                      placeholder='Enter First Name'
                      label='Address'
                      defaultValue='Celeste Slater606-3727 Ullamcorper. StreetRoseville NH 11523(786) 713-8616'
                      variant='outlined'
                      className='form-inputs'
                    />
                  </Stack>
                  <Stack direction='row' spacing={2} mt={1}>
                    <TextField
                      id='outlined-basic'
                      fullWidth
                      placeholder='Enter First Name'
                      label='City'
                      defaultValue='Ullamcorper'
                      variant='outlined'
                      className='form-inputs'
                    />
                    <TextField
                      id='outlined-basic'
                      fullWidth
                      placeholder='Enter First Name'
                      label='Zip'
                      defaultValue='254789'
                      variant='outlined'
                      className='form-inputs'
                    />
                  </Stack>
                  <Stack direction='row' spacing={2} mt={1}>
                    <FormControl fullWidth>
                      <InputLabel id='demo-simple-select-label'>
                        State
                      </InputLabel>
                      <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={state}
                        label='State'
                        onChange={handleChange}
                        className='form-inputs'
                      >
                        <MenuItem value={10}>Roseville</MenuItem>
                        <MenuItem value={20}>Roseville 2</MenuItem>
                        <MenuItem value={30}>Roseville 3</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl fullWidth>
                      <InputLabel id='demo-simple-select-label'>
                        Country
                      </InputLabel>
                      <Select
                        style={{ width: "100%" }}
                        className='form-inputs'
                        label='Country'
                        value={selectedCountry}
                        onChange={(e) => selectCountryHandler(e.target.value)}
                      >
                        {!!countryArr?.length &&
                          countryArr.map(({ label, value }) => (
                            <MenuItem key={value} value={value}>
                              {label}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </Stack>
                  <Stack direction='row' spacing={2} mt={1}>
                    <TextField
                      sx={{ width: "100%" }}
                      id='outlined-multiline-static'
                      label='About Me (400 words)'
                      className='form-inputs'
                      multiline
                      inputProps={{ maxLength: 400 }}
                      defaultValue='Duis velit dui, sagittis sed pulvinar vitae, bibendum eget nisi. Duis tincidunt in dui vel iaculis. Vestibulum libero orci, pharetra nec placerat fringilla, sodales quis nunc. Aenean vitae congue mi, molestie laoreet ligula. Suspendisse efficitur, metus nec consequat tincidunt, felis metus efficitur enim, ac scelerisque felis est a erat.'
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card sx={{ minWidth: 275 }} className='custom-card'>
                <CardContent>
                  <Paper
                    component='div'
                    sx={{
                      p: "10px 4px",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Image
                      src='/images/icons/social_links.svg'
                      className='margin-right-1'
                      alt='Social Links'
                      width={21}
                      height={18}
                    />
                    <span className='flight-details-title'>
                      {"Social Link"}
                    </span>

                    <Stack
                      direction='row'
                      spacing={2}
                      sx={{ marginTop: "2em" }}
                    >
                      <FormControl variant='outlined' fullWidth>
                        <InputLabel
                          htmlFor='outlined-adornment-password'
                          sx={{ marginBottom: "1em" }}
                        >
                          Facebook
                        </InputLabel>
                        <OutlinedInput
                          id='outlined-adornment-password'
                          label='Facebook'
                          className='form-inputs'
                          endAdornment={
                            <InputAdornment position='end'>
                              <Image
                                src='/images/icons/fb.svg'
                                alt='Social Links'
                                width={21}
                                height={18}
                              />
                            </InputAdornment>
                          }
                        />
                      </FormControl>

                      <FormControl variant='outlined' fullWidth>
                        <InputLabel
                          htmlFor='outlined-adornment-password'
                          sx={{ marginBottom: "1em" }}
                        >
                          Twitter
                        </InputLabel>
                        <OutlinedInput
                          id='outlined-adornment-password'
                          label='Twitter'
                          className='form-inputs'
                          endAdornment={
                            <InputAdornment position='end'>
                              <Image
                                src='/images/icons/twitter.svg'
                                alt='Social Links'
                                width={21}
                                height={18}
                              />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Stack>
                    <Stack
                      direction='row'
                      spacing={2}
                      sx={{ marginTop: "0em" }}
                    >
                      <FormControl variant='outlined' fullWidth>
                        <InputLabel
                          htmlFor='outlined-adornment-password'
                          sx={{ marginBottom: "1em" }}
                        >
                          Instagram
                        </InputLabel>
                        <OutlinedInput
                          id='outlined-adornment-password'
                          label='Instagram'
                          className='form-inputs'
                          endAdornment={
                            <InputAdornment position='end'>
                              <Image
                                src='/images/icons/instagram.svg'
                                alt='Social Links'
                                width={21}
                                height={18}
                              />
                            </InputAdornment>
                          }
                        />
                      </FormControl>

                      <FormControl variant='outlined' fullWidth>
                        <InputLabel
                          htmlFor='outlined-adornment-password'
                          sx={{ marginBottom: "1em" }}
                        >
                          Linkedin
                        </InputLabel>
                        <OutlinedInput
                          id='outlined-adornment-password'
                          label='Linkedin'
                          className='form-inputs'
                          endAdornment={
                            <InputAdornment position='end'>
                              <Image
                                src='/images/icons/linkedin.svg'
                                alt='Social Links'
                                width={21}
                                height={18}
                              />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Stack>
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
                      label='Want to show my social links publicly.'
                    />
                  </Paper>
                </CardContent>
              </Card>

              <Card
                sx={{ minWidth: 275, marginTop: "2.5em" }}
                className='custom-card'
              >
                <CardContent>
                  <Paper
                    component='div'
                    sx={{
                      p: "10px 4px",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Image
                      src='/images/icons/lock.svg'
                      className='margin-right-1'
                      alt='Social Links'
                      width={21}
                      height={18}
                    />
                    <span className='flight-details-title'>
                      {"Change Password"}
                    </span>

                    <Stack
                      direction='row'
                      spacing={2}
                      sx={{ marginTop: "2em" }}
                    >
                      <FormControl variant='outlined' fullWidth>
                        <InputLabel
                          htmlFor='outlined-adornment-password'
                          sx={{ marginBottom: "1em" }}
                        >
                          Current Password
                        </InputLabel>
                        <OutlinedInput
                          id='outlined-adornment-password'
                          type={showPassword ? "text" : "password"}
                          label='Current Password'
                          className='form-inputs'
                          endAdornment={
                            <InputAdornment position='end'>
                              <IconButton
                                aria-label='toggle password visibility'
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge='end'
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Stack>
                    <Stack
                      direction='row'
                      spacing={2}
                      sx={{ marginTop: "0em" }}
                    >
                      <FormControl variant='outlined' fullWidth>
                        <TextField
                          id='outlined-basic'
                          fullWidth
                          type='password'
                          placeholder='Enter New Password'
                          label='New Password'
                          variant='outlined'
                          className='form-inputs'
                        />
                      </FormControl>
                      <FormControl variant='outlined' fullWidth>
                        <TextField
                          id='outlined-basic'
                          fullWidth
                          type='password'
                          placeholder='Confirm New Password'
                          label='Confirm New Password'
                          variant='outlined'
                          className='form-inputs'
                        />
                      </FormControl>
                    </Stack>
                  </Paper>
                </CardContent>
              </Card>

              <Card
                sx={{ minWidth: 275, marginTop: "2.5em" }}
                className='custom-card'
              >
                <CardContent>
                  <Paper
                    component='div'
                    sx={{
                      p: "10px 4px",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Image
                      src='/images/icons/person_remove.svg'
                      className='margin-right-1'
                      alt='Social Links'
                      width={21}
                      height={18}
                    />
                    <span className='flight-details-title'>
                      {"Delete Account"}
                    </span>

                    <Stack
                      direction='row'
                      spacing={2}
                      sx={{ marginTop: "2em" }}
                    >
                      <Button
                        variant='contained'
                        size='large'
                        onClick={handleClickOpen}
                        className='black-button'
                        style={{
                          padding: "1em 2em",
                          marginTop: "1.5em",
                          marginBottom: "1em",
                        }}
                      >
                        Submit Delete Request
                      </Button>
                    </Stack>
                  </Paper>
                </CardContent>
              </Card>
              <Button
                variant='contained'
                size='large'
                fullWidth
                onClick={handleClick({
                  vertical: "bottom",
                  horizontal: "right",
                })}
                sx={{ marginTop: "2.5em", padding: "1em 2em", display: "flex" }}
                className='form-submit'
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>
          {"Are you sure you want to delete your account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your account and all the data from
            our databse completely?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} sx={{ color: "green" }}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus sx={{ color: "red" }}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
