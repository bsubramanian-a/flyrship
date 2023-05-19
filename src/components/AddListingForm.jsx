import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";

import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { grey, pink } from "@mui/material/colors";
import Image from "next/image";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import dayjs from "dayjs";

export default function AddListingForm() {
  const [state, setState] = React.useState({
    phone: false,
    email: false,
    whatsapp: false,
    facebook: false,
    other: false,
  });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { phone, email, whatsapp, facebook, other } = state;
  const servicetype = [
    { "Deliver Goods": ["deliver_goods"] },
    { "Deliver Services": ["deliver_services"] },
  ];
  const maxweight = [
    { lbs: ["lbs"] },
    { Kg: ["kg"] },
    { Liters: ["liters"] },
    { Grams: ["grams"] },
  ];
  const goodstype = [
    { Packages: ["packages"] },
    { Article: ["article"] },
    { Medicine: ["medicine"] },
    { "Electronic Devices": ["electronic_devices"] },
    { Books: ["books"] },
    { Dresses: ["dresses"] },
    { "Fragile Items": ["fragile_items"] },
    { "Cars Parts": ["cars_parts"] },
    { "Food Items": ["food_items"] },
  ];
  const [selectedValue, setSelectedValue] = React.useState("");

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  const [value, setValue] = React.useState("");

  const [customdate, setCustomdate] = useState(false);

  return (
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
            src='/images/icons/pin_drop.svg'
            className='margin-right-1'
            alt='Location'
            width={21}
            height={18}
          />
          <span className='flight-details-title'>{"Listing Details"}</span>
          <div className='add-listing-form-wrapper'>
            <Paper
              component='form'
              sx={{
                p: "10px 4px",
                alignItems: "center",
                width: "100%",
                marginTop: "1em",
              }}
            >
              <TextField
                id='outlined-basic'
                fullWidth
                required
                placeholder='Enter Listing Title'
                label='Listing Title'
                variant='outlined'
                className='form-inputs'
              />
              <TextField
                id='outlined-basic'
                fullWidth
                required
                placeholder='Enter Destination Airport'
                label='Destination Airport'
                variant='outlined'
                InputProps={{
                  readOnly: true,
                }}
                className='form-inputs'
              />
              <div className='addlisting-map' style={{ marginBottom: "15px" }}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.017139219605!2d88.4426832155127!3d22.653149585141346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89faa59df6903%3A0xdb1444043648b83!2sNetaji%20Subhash%20Chandra%20Bose%20International%20Airport!5e0!3m2!1sen!2sin!4v1680007679592!5m2!1sen!2sin'
                  width='100%'
                  height='260'
                  frameBorder='0'
                  style={{ border: 0, borderRadius: 15 }}
                  allowFullScreen=''
                  aria-hidden='false'
                  tabIndex='0'
                ></iframe>
              </div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: grey[600],
                        "&.Mui-checked": {
                          color: grey[900],
                        },
                      }}
                    />
                  }
                  label='I can deliver the service/goods at requester location'
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: grey[600],
                        "&.Mui-checked": {
                          color: grey[900],
                        },
                      }}
                    />
                  }
                  label='I can carry airport Duty Free'
                />
              </FormGroup>
              <Grid container spacing={2} sx={{ marginTop: "1em" }}>
                <Grid item xs={6}>
                  <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Departure Date'
                    variant='outlined'
                    className='form-inputs'
                    defaultValue='20-03-2023'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='start'>
                          <CalendarTodayRoundedIcon />
                        </InputAdornment>
                      ),
                      readOnly: true,
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id='outlined-basic'
                    fullWidth
                    label='Departure Date'
                    variant='outlined'
                    className='form-inputs'
                    defaultValue='21-03-2023'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='start'>
                          <CalendarTodayRoundedIcon />
                        </InputAdornment>
                      ),
                      readOnly: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ width: "100%" }}
                  id='outlined-multiline-static'
                  label='Description (400 words)'
                  className='form-inputs'
                  multiline
                  inputProps={{ maxLength: 400 }}
                  defaultValue='Duis velit dui, sagittis sed pulvinar vitae, bibendum eget nisi. Duis tincidunt in dui vel iaculis. Vestibulum libero orci, pharetra nec placerat fringilla, sodales quis nunc. Aenean vitae congue mi, molestie laoreet ligula. Suspendisse efficitur, metus nec consequat tincidunt, felis metus efficitur enim, ac scelerisque felis est a erat.'
                />
              </Grid>
            </Paper>
          </div>
        </Paper>
        <Paper
          component='div'
          sx={{
            p: "10px 4px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image
            src='/images/icons/service_details.svg'
            className='margin-right-1'
            alt='Location'
            width={21}
            height={18}
          />
          <span className='flight-details-title'>{"Service Details"}</span>
          <div className='add-listing-dropdown-wrapper'>
            <Paper
              component='form'
              sx={{
                p: "10px 4px",
                alignItems: "center",
                width: "100%",
                marginTop: "1em",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id='select-service-type-label'>
                  Select Service Type
                </InputLabel>
                <Select
                  labelId='select-service-type-label'
                  id='select-service-type'
                  className='form-inputs'
                  label='Select Service Type'
                  displayEmpty
                  onChange={handleChange}
                  value={value}
                >
                  {servicetype.map((element) => (
                    <MenuItem
                      value={element[Object.keys(element)] + ""}
                      key={Object.keys(element)[0]}
                    >
                      {Object.keys(element)[0]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
          </div>
          <Grid container spacing={2} padding={1}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id='select-goods-type'>
                  {"Select Goods Type"}
                </InputLabel>
                <Select
                  labelId='select-goods-type-label'
                  id='select-goods-type'
                  className='form-inputs'
                  label='Select Goods Type'
                  displayEmpty
                  onChange={handleChange}
                  value={value}
                >
                  {goodstype.map((element) => (
                    <MenuItem
                      value={element[Object.keys(element)] + ""}
                      key={Object.keys(element)[0]}
                    >
                      {Object.keys(element)[0]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <Paper
                component='form'
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",

                  borderRadius: "15px",
                  boxShadow: "none",
                  border: "1px solid #D2D2D2;",
                }}
              >
                <InputBase
                  label='Outlined'
                  variant='outlined'
                  sx={{ ml: 1, flex: 1 }}
                  placeholder='Select Maximum Quantity'
                  inputProps={{ "aria-label": "Select Maximum Quantity" }}
                />

                <Select
                  labelId='sselect-max-weight-label'
                  id='select-max-weight'
                  label='Select Service Type'
                  sx={{
                    borderRadius: "0px 15px 15px 0px",
                    boxShadow: "none",

                    width: "120px",
                  }}
                  onChange={handleChange}
                  value={value}
                >
                  {maxweight.map((element) => (
                    <MenuItem
                      value={element[Object.keys(element)] + ""}
                      key={Object.keys(element)[0]}
                    >
                      {Object.keys(element)[0]}
                    </MenuItem>
                  ))}
                </Select>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          component='div'
          sx={{
            p: "10px 4px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image
            src='/images/icons/service_details.svg'
            className='margin-right-1'
            alt='Location'
            width={21}
            height={18}
          />
          <span className='flight-details-title'>{"Other Details"}</span>
          <div className='add-listing-dropdown-wrapper'>
            <Paper
              component='form'
              sx={{
                p: "10px 4px",
                alignItems: "center",
                marginTop: "1em",
                width: "100%",
              }}
            >
              <FormControl
                sx={{ m: 0 }}
                component='fieldset'
                variant='standard'
              >
                <FormLabel component='legend'>
                  {"Preferred Communication"}
                </FormLabel>
                <FormGroup
                  sx={{
                    m: 0,
                    display: "flex",
                    flexDirection: "row",
                    marginTop: ".5em",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={phone}
                        onChange={handleChange}
                        name='phone'
                        sx={{
                          color: grey[600],
                          "&.Mui-checked": {
                            color: grey[900],
                          },
                        }}
                      />
                    }
                    label='Phone'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={email}
                        onChange={handleChange}
                        name='email'
                        sx={{
                          color: grey[600],
                          "&.Mui-checked": {
                            color: grey[900],
                          },
                        }}
                      />
                    }
                    label='Email'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={whatsapp}
                        onChange={handleChange}
                        name='whatsapp'
                        sx={{
                          color: grey[600],
                          "&.Mui-checked": {
                            color: grey[900],
                          },
                        }}
                      />
                    }
                    label='Whatsapp'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={facebook}
                        onChange={handleChange}
                        name='facebook'
                        sx={{
                          color: grey[600],
                          "&.Mui-checked": {
                            color: grey[900],
                          },
                        }}
                      />
                    }
                    label='Facebook'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={other}
                        onChange={handleChange}
                        name='other'
                        sx={{
                          color: grey[600],
                          "&.Mui-checked": {
                            color: grey[900],
                          },
                        }}
                      />
                    }
                    label='Other'
                  />
                </FormGroup>
              </FormControl>
            </Paper>

            <Paper
              component='form'
              sx={{
                p: "10px 4px",
                alignItems: "center",

                width: "100%",
              }}
            >
              <FormControl>
                <FormLabel id='demo-row-radio-buttons-group-label'>
                  {"When you can deliver goods/services?"}
                </FormLabel>
                <RadioGroup
                  sx={{
                    m: 0,
                    display: "flex",
                    flexDirection: "row",
                    marginTop: ".5em",
                  }}
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group'
                >
                  <FormControlLabel
                    value='at_arrival'
                    control={<Radio />}
                    label='Once I arrive'
                  />
                  <FormControlLabel
                    value='custom'
                    control={<Radio />}
                    label='Custom'
                    onClick={() => setCustomdate(true)}
                  />
                </RadioGroup>
              </FormControl>
              {customdate && (
                <div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div
                      components={[
                        "DateTimePicker",
                        "MobileDateTimePicker",
                        "DesktopDateTimePicker",
                      ]}
                    >
                      <DateTimePicker
                        className='form-inputs'
                        sx={{ width: "100%", mt: "1em" }}
                        defaultValue={dayjs("2022-04-17T15:30")}
                      />
                    </div>
                  </LocalizationProvider>
                </div>
              )}
            </Paper>
          </div>
        </Paper>
      </CardContent>
    </Card>
  );
}
