import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ViewRequestModalData() {
  const [open, setOpen] = React.useState(false);
  const handleClose2 = () => setOpen(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      className='mobile-scroll-modal'
      sx={{ overflowY: "scroll", maxHeight: "700px" }}
    >
      <Typography
        id='modal-modal-title'
        variant='h6'
        component='h2'
        fontWeight={"bold"}
      >
        {"#221 Ayan Mukhopadhyay (Delivery date - 28-03-2023 at 14:20 hrs)"}
      </Typography>
      <div className='view-request-table-data'>
        <TableContainer component={Paper} sx={{ marginTop: "1em" }}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableBody>
              <TableRow>
                <TableCell align='left'>{"Requester Name"}</TableCell>
                <TableCell align='left'>{"Ayan Mukhopadhyay"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>{"Requester Contact"}</TableCell>
                <TableCell align='left'>{"+91 9836952666"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>{"Requester Email"}</TableCell>
                <TableCell align='left'>{"user@email.com"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>{"Preferred Communication"}</TableCell>
                <TableCell align='left'>
                  <Chip
                    label='Phone'
                    sx={{
                      marginRight: "1em",
                      backgroundColor: "#97AEEA",
                      fontWeight: "Bold",
                      color: "#fff",
                    }}
                  />
                  <Chip
                    label='Email'
                    sx={{
                      marginRight: "1em",
                      backgroundColor: "#97AEEA",
                      fontWeight: "Bold",
                      color: "#fff",
                    }}
                  />
                  <Chip
                    label='Whatsapp'
                    sx={{
                      marginRight: "1em",
                      backgroundColor: "#97AEEA",
                      fontWeight: "Bold",
                      color: "#fff",
                    }}
                  />
                  <Chip
                    label='Facebook'
                    sx={{
                      marginRight: "1em",
                      backgroundColor: "#97AEEA",
                      fontWeight: "Bold",
                      color: "#fff",
                    }}
                  />
                  <Chip
                    label='Other'
                    sx={{
                      marginRight: "1em",
                      backgroundColor: "#97AEEA",
                      fontWeight: "Bold",
                      color: "#fff",
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>{"Full Address"}</TableCell>
                <TableCell align='left'>
                  {
                    "Shyamnagar Rahuta Jora Mandir, P.O - Shyamnagar. 743127. Kolkata, West bengal. India"
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>{"Goods Type"}</TableCell>
                <TableCell align='left'>{"Package"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>{"Goods Weight"}</TableCell>
                <TableCell align='left'>{"500 gms"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>{"Requester Message"}</TableCell>
                <TableCell align='left'>
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>{"Delivery Location"}</TableCell>
                <TableCell align='left'>
                  <Chip
                    label='At Airport'
                    sx={{
                      marginRight: "1em",
                      backgroundColor: "#52DC91",
                      fontWeight: "Bold",
                      color: "#fff",
                    }}
                  />
                  <Chip
                    label='Duty Free'
                    color='warning'
                    sx={{
                      marginRight: "1em",
                      backgroundColor: "#FAB446",
                      fontWeight: "Bold",
                      color: "#fff",
                    }}
                  />
                  {"Netaji Subhash Chandra, Bose International Airport"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='left'>{"Delivery Date & Time"}</TableCell>
                <TableCell align='left'>{"24-03-2023 at 12:30 PM"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Stack
        spacing={2}
        direction='row'
        className='responsive-width'
        sx={{ margin: "auto", marginTop: "1em" }}
      >
        <Button
          variant='contained'
          size='large'
          fullWidth
          onClick={handleClickOpen}
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          className='black-button'
        >
          {" Accept Request"}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>{"Are your sure?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <Typography sx={{ fontWeight: "bold" }}>
                Are you sure you want to accept this request and deliver the
                goods / services at At Airport and with Duty Free on 24-03-2023
                at 12:30 PM?
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Yes</Button>
            <Button onClick={handleClose} autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
        <Button
          variant='contained'
          size='large'
          fullWidth
          onClick={handleClose2}
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          className='black-button-outline'
        >
          {" Decline Request"}
        </Button>
      </Stack>
    </Box>
  );
}
