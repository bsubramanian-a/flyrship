import * as React from "react";
import { Container } from "@mui/joy";
import Grid from "@mui/joy/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SideMenu from "../../components/SideMenu";
import MyListingTable from "../../components/MyListingTable";

MyListing.title = "My Listings";

export default function MyListing() {
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
        <Grid item xs={12} marginBottom='3em'>
          <h1>{"My Listing"}</h1>
        </Grid>
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <div className='mylisting-table'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell align='left'>{"Title"}</TableCell>
                    <TableCell align='left'>{"Destination"}</TableCell>
                    <TableCell align='left'>{"Travel Duration"}</TableCell>
                    <TableCell align='left'>{"Listing Date"}</TableCell>
                    <TableCell align='left'>{"Status"}</TableCell>
                    <TableCell align='left'>{"No. of Request"}</TableCell>
                    <TableCell align='center'>{"Action"}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <MyListingTable></MyListingTable>
                  <MyListingTable></MyListingTable>
                  <MyListingTable></MyListingTable>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
