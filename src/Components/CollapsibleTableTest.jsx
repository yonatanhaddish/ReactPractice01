import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  IconButton,
  Collapse,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const rows = [
  {
    id: 10,
    mapping_name: "MappingTypeOne",
    mapping_id: "mappingIdOne",
    launch_name: "LaunchNameOne",
    role: "roleOne",
    history: [
      {
        id: 100,
        test_history: "RowOneTestOne",
      },
      {
        id: 101,
        test_history: "RowOneTestOne",
      },
      {
        id: 102,
        test_history: "RowOneTestOne",
      },
    ],
  },
  {
    id: 20,
    mapping_name: "MappingTypeTwo",
    mapping_id: "mappingIdTwo",
    launch_name: "LaunchNameTwo",
    role: "roleTwo",
    history: [
      {
        id: 200,
        test_history: "RowOTwoTestOne",
      },
      {
        id: 201,
        test_history: "RowTwoTestTwo",
      },
      {
        id: 202,
        test_history: "RowTwoTestThree",
      },
    ],
  },
  {
    id: 30,
    mapping_name: "MappingTypeThree",
    mapping_id: "mappingIdThree",
    launch_name: "LaunchNameThree",
    role: "roleThree",
    history: [
      {
        id: 300,
        test_history: "RowThreeTestOne",
      },
      {
        id: 301,
        test_history: "RowThreeTestTwo",
      },
      {
        id: 302,
        test_history: "RowThreeTestThree",
      },
    ],
  },
];

function CollapsibleTableTest() {
  const [data, setData] = useState(rows);
  const columns = [
    {
      field: "id_table",
      headerName: "ID",
      type: "number",
      width: 10,
      editable: false,
    },
    {
      field: "mapping_name",
      headerName: "Mapping Type",
      width: 200,
      editable: false,
    },
    {
      field: "mapping_id",
      headerName: "Mapping ID",
      type: "number",
      width: 200,
      editable: false,
    },
    {
      field: "launch_name",
      headerName: "Launch Name",
      width: 200,
      editable: true,
    },
  ];
  const table_field_column = [
    "ID",
    "Mapping Name",
    "Mapping ID",
    "Launch Name",
    "Test Type",
    "Department",
  ];

  function Row({ row }) {
    const [open, setOpen] = useState(false);
    function handleIconToggle(params) {
      setOpen(!open);
    }
    return (
      <React.Fragment>
        <TableRow>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.mapping_name}</TableCell>
          <TableCell>{row.mapping_id}</TableCell>
          <TableCell>{row.launch_name}</TableCell>
          <TableCell>
            <IconButton onClick={handleIconToggle}>
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </TableCell>
          <TableCell>{row.role}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                <Paper>
                  {row.history.map((rowHistory) => (
                    <Chip label={rowHistory.test_history} key={rowHistory.id} />
                  ))}
                </Paper>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            {table_field_column.map((file_column) => (
              <TableCell key={file_column}>{file_column}</TableCell>
            ))}
            <TableCell>
              {" "}
              <Button startIcon={<AddIcon />}>ADD RECORD</Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CollapsibleTableTest;
