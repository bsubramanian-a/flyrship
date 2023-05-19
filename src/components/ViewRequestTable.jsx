import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

import ViewRequestModalData from "./ViewRequestModalData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "15px",
  boxShadow: 24,

  p: 4,
};

export default function ViewRequestTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component='th' scope='row'>
        <p>1</p>
      </TableCell>
      <TableCell align='left'>
        <p>{"Ayan Mukhopadhyay"}</p>
      </TableCell>
      <TableCell align='left'>
        <p>{"28-03-2023"}</p>
      </TableCell>
      <TableCell align='left'>
        <p>{"20-03-2023 - 22-03-2023"}</p>
      </TableCell>
      <TableCell align='left'>
        <p>{"Package"}</p>
      </TableCell>
      <TableCell align='left'>
        <h4>{"18 lbs"}</h4>
      </TableCell>
      <TableCell align='left'>
        <Chip className='chip-custom-warning' label='Pending' />
      </TableCell>
      <TableCell align='center'>
        <Button
          variant='contained'
          size='large'
          onClick={handleOpen}
          fullWidth
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          className='black-button'
        >
          {" View"}
        </Button>
        <Modal
          open={open}
          className='custom-modal'
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Box sx={{ position: "absolute", top: "0", right: "0" }}>
              <IconButton onClick={handleClose}>
                <HighlightOffOutlinedIcon />
              </IconButton>
            </Box>

            <ViewRequestModalData></ViewRequestModalData>
          </Box>
        </Modal>
      </TableCell>
    </TableRow>
  );
}
