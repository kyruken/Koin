import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name,price) {
    return {name, price};
  }
  
  const rows = [
    createData('Bitcoin', '$13,370'),
    createData('Bitcoin', '$13,370'),
    createData('Bitcoin', '$13,370'),
    createData('Bitcoin', '$13,370'),
    createData('Bitcoin', '$13,370'),
  ];

  console.log(StarBorderIcon);
export default function Grid() {
    return (
        <div>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colspan="2">Name</TableCell>
                        <TableCell align="center">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell><StarBorderIcon></StarBorderIcon></TableCell>
                    <TableCell component="th" scope="row"  sx={{border: 0}}>
                        {row.name}
                    </TableCell>
                    <TableCell align="center" sx={{border: 0}}>{row.price}</TableCell>

                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>

        </div>
    )
}