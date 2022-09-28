import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable(props) {
  const { colorData, headers } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow
            style={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }}
          >
            {headers.map((ele) => {
              return (
                <TableCell
                  component="th"
                  scope="row"
                  style={{ borderBottom: "none" }}
                >
                  {ele === "id" ? "Color" : ele}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {colorData.map((row, index) => (
            <TableRow
              key={row.name}
              //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div
                  style={{
                    backgroundColor: row.color,
                    width: "30px",
                    height: "30px",
                  }}
                ></div>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.color}</TableCell>
              <TableCell>{row.pantone_value}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
