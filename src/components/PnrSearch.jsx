import * as React from "react";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { grey, pink } from "@mui/material/colors";
import Image from "next/image";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

export default function PnrSearch() {
  return (
    <Card sx={{ minWidth: 275 }} className='custom-card'>
      <CardContent>
        <Paper
          component='form'
          sx={{
            p: "10px 4px",
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
            placeholder='Enter PNR / Booking Number'
            defaultValue={"DL09LG4445"}
            inputProps={{ "aria-label": "Enter PNR / Booking Number" }}
          />

          <Button
            className='black-button'
            sx={{
              p: "10px 4px",
              marginRight: "10px",
              width: "150px",
              color: "#fff",
              fontWeight: "700",

              boxShadow: "none",
              border: "1px solid #D2D2D2;",
            }}
          >
            Search
          </Button>
        </Paper>
        <Alert severity='success' sx={{ marginTop: "1em" }}>
          <h4>{"Your PNR / Booking Number has been verified successfully!"}</h4>
        </Alert>
        <Paper
          component='div'
          sx={{
            p: "10px 4px",
            alignItems: "center",
            width: "100%",
            marginTop: "1.5em",
          }}
        >
          <Image
            src='/images/icons/plane.svg'
            className='margin-right-1'
            alt='Airplane'
            width={21}
            height={18}
          />
          <span className='flight-details-title'>{"Your Flight Details"}</span>
          <div className='flight-api-details'>
            <h5>
              {"Flight Name- "}
              <span>{"IndiGo"}</span>
            </h5>
            <h5>
              {"Flight Number-"} <span>{"6E-6557"}</span>
            </h5>
            <h5>
              {"Depart from -"}
              <span>
                {"New Delhi (Indira Gandhi International, Airport Terminal 1)"}
              </span>
            </h5>
            <h5>
              {"Arrival at -"}
              <span>
                {"Kolkata (Netaji Subhash Chandra, Bose International Airport)"}
              </span>
            </h5>
            <h5>
              {"Departure Date -"}
              <span>{"20.03.2023"}</span>
            </h5>
            <h5>
              {"Departure Time -"}
              <span>{"12:20 hrs"}</span>
            </h5>
            <h5>
              {"Arrival Date -"}
              <span>{"21.03.2023"}</span>
            </h5>
            <h5>
              {"Arrival Time -"}
              <span>{"14:30 hrs"}</span>
            </h5>
            <h5>
              {"Travel Time -"}
              <span>{"2h 10m"}</span>
            </h5>
            <h5>
              {"Travel Time -"}
              <span>{"Ayan Mukhopadhyay"}</span>
            </h5>
            <h5>
              {"Seat Number -"}
              <span>{"26A"}</span>
            </h5>
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: grey[600],
                    "&.Mui-checked": {
                      color: grey[900],
                    },
                  }}
                />
              }
              label='I acknowledge that  all the information is correct and some of information
              will listed on website.'
            />
          </FormGroup>
        </Paper>
      </CardContent>
    </Card>
  );
}
