import React, {useState, useEffect} from "react";
import { Container, FormControl } from "@mui/joy";
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
import OnlyLogo from "../../components/OnlyLogo";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import Image from "next/image";
import Google from "../../../public/images/icons/google.svg";
import Facebook from "../../../public/images/icons/facebook.svg";
import Phone from "../../../public/images/icons/phone.svg";
import HrLine from "../../../public/images/icons/line.svg";
import PhoneModal from "../../components/PhoneModal";
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Loader from "../../components/Loader";

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
Login.title = "Login";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const loginPhone = () => setOpen(true);
  const loginPhoneClose = () => setOpen(false);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // Validation passed, handle form submission logic
      setLoading(true);
      console.log("process.env.NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL);
      // Perform any necessary API calls
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // console.log("response login screen", response);

      if (response.ok) {
        const data = await response.json();
        // console.log("Login response data:", data); // Log the data object
      
        // Check if the access_token property exists in the data object
        if (data?.data?.hasOwnProperty('access_token')) {
          // console.log("data?.data?.access_token", data?.data?.access_token)
          const accessToken = data?.data?.access_token;
          localStorage.setItem('accessToken', accessToken);
          // Handle successful form submission
          setFormData({
            username: '',
            password: ''
          });
          // Redirect to the dashboard or perform other actions
          router.push('/dashboard/Index');
        } else {
          // Handle the case when access_token is not found in the response
          setError('Login failed, please try again later');
        }
        setLoading(false);
      } else {
        setLoading(false);
        const errorData = await response.json();
        setError(errorData.error); // Set the error message received from the backend
      }      
      
      setErrors({});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      }
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken & accessToken != '') {
      // User is not authenticated, redirect to login
      router.push('/dashboard/Index');
    } else {
      // User is authenticated, allow rendering of the component
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    // Render a loading state or a placeholder while the authentication check is in progress
    return <div>Loading...</div>;
  }

  return (
    <section className='signup-bg'>
      <Container maxWidth='lg'>
        <OnlyLogo></OnlyLogo>
        {loading && <Loader />}
        <Grid container spacing={0} marginTop='2em'>
          <Grid item xs={12}>
            <h1>Welcome Back!</h1>
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
                gap: 2,
                flexWrap: "wrap",
                marginTop: "1em",
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

            {error && <p className="error_text">{error}</p>}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} marginTop={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    id='username'
                    fullWidth
                    name="username"
                    value={formData.username}
                    label='Username/Email'
                    variant='outlined'
                    className='form-inputs mb0 mt_form'
                    onChange={handleChange}
                  />
                  {errors.username && <span className="error_text">{errors.username}</span>}

                  <TextField
                    id='password'
                    fullWidth
                    label='Password'
                    type={"password"}
                    name="password"
                    value={formData.password}
                    variant='outlined'
                    className='form-inputs mb0 mt_form'
                    onChange={handleChange}
                  />
                  {errors.password && <span className="error_text">{errors.password}</span>}
                </Grid>

                <Grid item xs={12} md={6}>
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
                      label='Remember me'
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} md={6} textAlign='right'>
                  <h5>
                    <Link href='PasswordRecovery'>Forget Password?</Link>
                  </h5>
                </Grid>
                <Button
                  type='submit'
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
                  Login
                </Button>
                <Grid
                  item
                  xs={12}
                  md={12}
                  textAlign='center'
                  sx={{ paddingBottom: "2em" }}
                >
                  <h5>
                    New here? <Link href='Signup'>Sign up</Link>
                  </h5>
                </Grid>
              </Grid>
            </form>
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
