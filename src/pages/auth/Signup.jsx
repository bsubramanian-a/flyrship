import React, {useState, useEffect} from "react";
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
import { useRouter } from 'next/router';
import * as Yup from 'yup';

Signup.title = "Signup";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

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
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const loginPhone = () => setOpen(true);
  const loginPhoneClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', confirmpassword: '', phone: '', lastname: '', firstname: '' });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setErrors({});
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // Validation passed, handle form submission logic
      // Perform any necessary API calls
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // console.log("response login screen", response);

      if (response.ok) {
        const data = await response.json();
        //  console.log("register response", data);
        if(data?.data?.id){
          setFormData({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            password: '',
            confirmnassword: '',
          });
          setSuccess("Register successful please login");
        }
      } else {
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
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && accessToken != '') {
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
            {error && <p className="error_text">{error}</p>}
            {success && <p className="success_text">{success}</p>}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} marginTop={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    id='firstname'
                    name="firstname"
                    value={formData.firstname}
                    fullWidth
                    label='First Name'
                    variant='outlined'
                    className='form-inputs mb0 mt_form'
                    onChange={handleChange}
                  />
                  {errors.firstname && <span className="error_text">{errors.firstname}</span>}
                  <TextField
                    id='email'
                    name="email"
                    value={formData.email}
                    fullWidth
                    label='Email Address'
                    type={"email"}
                    variant='outlined'
                    className='form-inputs mb0 mt_form'
                    onChange={handleChange}
                  />
                  {errors.email && <span className="error_text">{errors.email}</span>}
                  <TextField
                    id='password'
                    name="password"
                    value={formData.password}
                    fullWidth
                    label='Password'
                    type={"password"}
                    variant='outlined'
                    className='form-inputs mb0 mt_form'
                    onChange={handleChange}
                  />
                  {errors.password && <span className="error_text">{errors.password}</span>}
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id='lastname'
                    name="lastname"
                    value={formData.lastname}
                    fullWidth
                    label='Last Name'
                    variant='outlined'
                    className='form-inputs mb0 mt_form'
                    onChange={handleChange}
                  />
                  {errors.lastname && <span className="error_text">{errors.lastname}</span>}
                  <TextField
                    id='phone'
                    name="phone"
                    value={formData.phone}
                    fullWidth
                    label='Phone Number'
                    type={"number"}
                    variant='outlined'
                    className='form-inputs mb0 mt_form'
                    onChange={handleChange}
                  />
                  {errors.phone && <span className="error_text">{errors.phone}</span>}
                  <TextField
                    id='confirmpassword'
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    fullWidth
                    label='Confirm Password'
                    type={"password"}
                    variant='outlined'
                    className='form-inputs mb0 mt_form'
                    onChange={handleChange}
                  />
                  {errors.confirmpassword && <span className="error_text">{errors.confirmpassword}</span>}
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
                  <Button
                    type="submit"
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
