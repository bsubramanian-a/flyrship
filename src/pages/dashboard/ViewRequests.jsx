import * as React from "react";
import { Container } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import SideMenu from "../../components/SideMenu";
import ViewRequestTable from "../../components/ViewRequestTable";
import Link from "next/link";

ViewRequests.title = "View Requests";

export default function ViewRequests() {
  return (
    <Container maxWidth='lg' className='main-margin-wrapper'>
      <div className='side-nav'>
        <SideMenu></SideMenu>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className='fixed-right'
      >
        <Grid
          item
          xs={10}
          md={10}
          marginBottom='3em'
          sx={{ display: "flex" }}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Typography variant='h5' gutterBottom sx={{ fontWeight: "bold" }}>
            {"Lorem ipsum dolor sit amet"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          marginBottom='3em'
          sx={{ display: "flex" }}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Link href='MyListing'>
            <Button variant='outlined' size='small' color='error'>
              <KeyboardBackspaceOutlinedIcon></KeyboardBackspaceOutlinedIcon>{" "}
              {"Back"}
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} md={12} lg={12} sm={12}>
          <div className='mylisting-table'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>{"#"}</TableCell>
                    <TableCell align='left'>{"Requester Name"}</TableCell>
                    <TableCell align='left'>{"Requested Date"}</TableCell>
                    <TableCell align='left'>{"Delivery Date"}</TableCell>
                    <TableCell align='left'>{"Good Type"}</TableCell>
                    <TableCell align='left'>{"Good Weight"}</TableCell>
                    <TableCell align='left'>{"Status"}</TableCell>
                    <TableCell align='center'>{"Action"}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <ViewRequestTable></ViewRequestTable>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
