import React, { useState, useMemo, useEffect } from "react";
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
import { getStatesByCountryCode } from "countries-states-data";
import withAuth from "../middleware/WithAuth";
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Loader from "../../components/Loader";

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Current Password is required'),
  newPassword: Yup.string().required('New Password is required'),
  confirmPassword: Yup.string().required('New Password is required'),
});
// ProfileSettings.title = "Profile Settings";

const handleClick = (newState) => () => {
  setState({ open: true, ...newState });
};

const handleClose = () => {
  setState({ ...state, open: false });
};
const ProfileSettings = () => {
  const router = useRouter();
  const [state, setState] = React.useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [successProfile, setSuccessProfile] = useState('');

  const handlePasswordChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const changePassword = async() => {
    setErrors({});
    setSuccess("");
    setError("");
    try{
      // console.log("change password formdata", formData);
      await validationSchema.validate(formData, { abortEarly: false });
      setLoading(true);
      const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("change password data", data);
        if(data?.error){
          setError(data?.error);
        }else{
          setFormData({
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          });
          setSuccess("Password updated successfully");
          setErrors({});
        }
        setLoading(false);
      } else {
        setLoading(false);
        const errorData = await response.json();
        setError(errorData.error); // Set the error message received from the backend
      } 
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      }
    }     
  }

  useEffect(() => {
    setLoading(true);
    // Fetch the user profile data from the Next.js API
    fetch('/api/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        // console.log("userdata", data);
        setLoading(false);
        if(data?.statusCode == 401){
          router.push('/auth/Login');
          localStorage.setItem('accessToken', "");
        }
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      });
  }, []);  

  const handleSubmit = async (e) => {
    setSuccessProfile("");
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(user),
      });

      console.log("update profile resp", response);

      if (response.ok) {
        const data = await response.json();
        console.log("update profile response data:", data);
        setSuccessProfile("Profile updated successfully");
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }      
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const deleteAccount = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/delete-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(user),
      });

      console.log("delete profile resp", response);

      if (response.ok) {
        const data = await response.json();
        console.log("delete profile response data:", data);
        localStorage.clear();
        router.push('/auth/Login');
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }      
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    if(user?.country) selectCountryHandler(user?.country);
  }, [user?.country])

  // const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (value) => {
    console.log("selectCountryHandler", value);
    // setSelectedCountry(value);
    const states = getStatesByCountryCode(value);
    setState(states);
    handleChange('country')({ target: { value } });
  }

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

  const handleChange = (property) => (event) => {
    console.log("change ", event)
    if (property === 'zip') {
      const inputValue = event.target.value;
      const numericValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
  
      if (numericValue.length <= 9) {
        setUser((prevUser) => ({
          ...prevUser,
          zip: numericValue,
        }));
      }
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [property]: event?.target?.type === 'checkbox' ? event.target.checked : event.target.value,
      }));
    }
  };  

  return (
    <Container maxWidth='lg' className='main-margin-wrapper'>
      <div className='side-nav'>
        <SideMenu></SideMenu>
      </div>

      {loading && <Loader />}
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
                      label=''
                      value={user?.firstname}
                      variant='outlined'
                      className='form-inputs'
                    />
                    <TextField
                      id='outlined-basic'
                      fullWidth
                      disabled
                      placeholder='Enter Last Name'
                      label=''
                      value={user?.lastname}
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
                      label=''
                      value={user?.email}
                      variant='outlined'
                      className='form-inputs'
                    />
                    <TextField
                      id='outlined-basic'
                      fullWidth
                      disabled
                      placeholder='Enter Phone Number'
                      label=''
                      value={user?.phone}
                      variant='outlined'
                      className='form-inputs'
                    />
                  </Stack>
                  <Stack direction='row' spacing={10} mt={0}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={user?.is_email_public || false}
                          sx={{
                            color: grey[900],
                            "&.Mui-checked": { color: grey[900] },
                          }}
                          onChange={handleChange('is_email_public')}
                        />
                      }
                      label='Want to show my email publicly.'
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={user?.is_phone_public || false}
                          sx={{
                            color: grey[900],
                            "&.Mui-checked": { color: grey[900] },
                          }}
                          onChange={handleChange('is_phone_public')}
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
                      value={user?.address || ""}
                      variant='outlined'
                      className='form-inputs'
                      onChange={handleChange('address')}
                    />
                  </Stack>
                  <Stack direction='row' spacing={2} mt={1}>
                    <TextField
                      id='outlined-basic'
                      fullWidth
                      value={user?.city || ""}
                      placeholder='Enter City'
                      label='City'
                      defaultValue='Ullamcorper'
                      variant='outlined'
                      className='form-inputs'
                      onChange={handleChange('city')}
                    />
                    <TextField
                      id='outlined-basic'
                      fullWidth
                      value={user?.zip || ""}
                      placeholder='Enter zip'
                      label='Zip'
                      variant='outlined'
                      className='form-inputs'
                      onChange={handleChange('zip')}
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
                        value={user?.state || ""}
                        label='State'
                        onChange={handleChange('state')}
                        className='form-inputs'
                      >
                        {!!state?.length &&
                          state.map(state => (
                            <MenuItem key={state?.state_code} value={state?.state_code}>
                              {state?.name}
                            </MenuItem>
                        ))}
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
                        value={user?.country || ""}
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
                      onChange={handleChange('about_me')}
                      value={user?.about_me}
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
                          value={user?.facebook || ""}
                          onChange={handleChange('facebook')}
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
                          value={user?.twitter || ""}
                          onChange={handleChange('twitter')}
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
                          value={user?.instagram || ""}
                          onChange={handleChange('instagram')}
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
                          value={user?.linkedin || ""}
                          onChange={handleChange('linkedin')}
                        />
                      </FormControl>
                    </Stack>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={user?.is_social_public || false}
                          sx={{
                            color: grey[900],
                            "&.Mui-checked": { color: grey[900] },
                          }}
                          onChange={handleChange('is_social_public')}
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

                    <div>
                      {error && <span className="error_text">{error}</span>}
                      {success && <span className="success_text">{success}</span>}
                    </div>

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
                          value={formData.currentPassword}
                          onChange={handlePasswordChange}
                          name="currentPassword"
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
                          inputProps={{
                            autoComplete: "new-password", // Set autocomplete attribute to "new-password"
                          }}
                        />
                        {errors.currentPassword && <span className="error_text">{errors.currentPassword}</span>}
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
                          value={formData.newPassword}
                          placeholder='Enter New Password'
                          label='New Password'
                          name="newPassword"
                          variant='outlined'
                          onChange={handlePasswordChange}
                          className='form-inputs mb0 mt_form'
                        />
                        {errors.newPassword && <span className="error_text">{errors.newPassword}</span>}
                      </FormControl>
                      <FormControl variant='outlined' fullWidth>
                        <TextField
                          id='outlined-basic'
                          fullWidth
                          type='password'
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          placeholder='Confirm New Password'
                          label='Confirm New Password'
                          variant='outlined'
                          onChange={handlePasswordChange}
                          className='form-inputs mb0 mt_form'
                        />
                        {errors.confirmPassword && <span className="error_text">{errors.confirmPassword}</span>}
                      </FormControl>
                    </Stack>
                    <Button
                        variant='contained'
                        size='small'
                        fullWidth
                        onClick={changePassword}
                        sx={{ marginTop: "2.5em", padding: "0em 2em", display: "flex" }}
                        className='form-submit'
                      >
                        Change Password
                    </Button>
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
              {successProfile && <span className="success_text">{successProfile}</span>}
              <Button
                variant='contained'
                size='large'
                fullWidth
                onClick={handleSubmit}
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
          <Button onClick={deleteAccount} autoFocus sx={{ color: "red" }}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default withAuth(ProfileSettings);
