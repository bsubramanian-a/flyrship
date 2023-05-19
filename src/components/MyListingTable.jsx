import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import PersonalVideoOutlinedIcon from "@mui/icons-material/PersonalVideoOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";

export default function MyListingTable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component='th' scope='row'>
        <p>1</p>
      </TableCell>
      <TableCell align='left'>
        <p>{"Lorem ipsum dolor sit amet..."}</p>
      </TableCell>
      <TableCell align='left'>
        <p>{"Madrid, Spain"}</p>
      </TableCell>
      <TableCell align='left'>
        <p>{"20.03.2017 - 31.03.2023"}</p>
      </TableCell>
      <TableCell align='left'>
        <p>{"20.03.2017"}</p>
      </TableCell>
      <TableCell align='left'>
        <Chip className='chip-custom-warning' label='Going' />
      </TableCell>
      <TableCell align='left'>
        <h4>{"18"}</h4>
      </TableCell>
      <TableCell align='center'>
        <div>
          <IconButton
            aria-label='delete'
            size='large'
            id='basic-button'
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            className='action-button'
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link href='ViewRequests'>
              <MenuItem onClick={handleClose}>
                <VisibilityOutlinedIcon className='mergin-right-1' />
                {"View Requests"}
              </MenuItem>
            </Link>

            <MenuItem onClick={handleClose}>
              <TuneOutlinedIcon className='mergin-right-1' />
              {"Edit Listing"}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <PersonalVideoOutlinedIcon className='mergin-right-1' />
              {"View in Website"}
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              className='
            danger-color'
            >
              <DeleteOutlineOutlinedIcon className='mergin-right-1' />
              {"Delete Listing"}
            </MenuItem>
          </Menu>
        </div>
      </TableCell>
    </TableRow>
  );
}
