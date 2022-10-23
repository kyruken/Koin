import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(count, name, price, supply) {
    return {count, name, price, supply};
  }
  const rows = [];
  
  for (let x = 1; x < 6; x++) {
    rows.push(createData(x, 'Bitcoin', '$13,370', '19,000'));

  }


  console.log(StarBorderIcon);
export default function Grid() {
    return (
        <div>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Supply</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.count}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                    >
                    <TableCell sx={{border: 0}}><StarBorderIcon></StarBorderIcon></TableCell>
                    <TableCell sx={{border: 0}}>{row.count}</TableCell>
                    <TableCell component="th" scope="row"  sx={{border: 0}}>
                    {row.name}
                    </TableCell>
                    <TableCell sx={{border: 0}}>{row.price}</TableCell>
                    <TableCell sx={{border: 0}}>{row.supply}</TableCell>

                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>

        </div>
    )
}