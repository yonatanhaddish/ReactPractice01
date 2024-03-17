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
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";

const rows = [
  {
    id: 10,
    mapping_type: "MappingTypeOne",
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
        test_history: "RowOneTestTwo",
      },
      {
        id: 102,
        test_history: "RowOneTestThree",
      },
    ],
  },
  {
    id: 20,
    mapping_type: "MappingTypeTwo",
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
    mapping_type: "MappingTypeThree",
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
  {
    id: 40,
    mapping_type: "MappingTypeThree",
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
  const [openModal, setOpenModal] = useState(false);
  const [idTable, setIdTable] = useState("");
  const [mappingType, setMappingType] = useState("");
  const [mappingId, setMappingId] = useState("");
  const [launchName, setLaunchName] = useState("");
  const [departmentName, setDepartmentName] = useState("");

  const columns = [
    {
      field: "id_table",
      headerName: "ID",
      type: "number",
      width: 10,
      editable: false,
    },
    {
      field: "mapping_type",
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
    "Mapping Type",
    "Mapping ID",
    "Launch Name",
    "Test Type",
    "Department",
  ];
  const style = {
    position: "absolute",
    top: "45%",
    left: "45%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "40%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  function addNewRecordModal() {
    setOpenModal(true);
  }
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
    setIdTable("");
    setMappingType("");
    setMappingId("");
    setLaunchName("");
    setDepartmentName("");
  };
  function handleTest() {
    console.log(idTable);
    console.log(mappingType);
    console.log(mappingId);
    console.log(launchName);
    console.log(departmentName);

    setData([
      ...data,
      {
        id: idTable,
        mapping_type: mappingType,
        mapping_id: mappingId,
        launch_name: launchName,
        role: departmentName,
        history: [
          {
            id: Math.floor(Math.random()),
            test_history: "RowThreeTestOne",
          },
          {
            id: Math.floor(Math.random()),
            test_history: "RowThreeTestTwo",
          },
          {
            id: Math.floor(Math.random()),
            test_history: "RowThreeTestThree",
          },
        ],
      },
    ]);
    handleClose();
    setIdTable("");
    setMappingType("");
    setMappingId("");
    setLaunchName("");
    setDepartmentName("");
  }

  function Row({ row }) {
    const [open, setOpen] = useState(false);
    function handleIconToggle(params) {
      setOpen(!open);
    }
    function handleEditRow() {
      console.log(row.id);
    }

    return (
      <React.Fragment>
        <TableRow>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.mapping_type}</TableCell>
          <TableCell>{row.mapping_id}</TableCell>
          <TableCell>{row.launch_name}</TableCell>
          <TableCell>
            <IconButton onClick={handleIconToggle}>
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </TableCell>
          <TableCell>{row.role}</TableCell>
          <TableCell>
            <IconButton onClick={handleEditRow}>
              <EditIcon />
            </IconButton>
          </TableCell>
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
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
              {table_field_column.map((file_column) => (
                <TableCell key={file_column}>{file_column}</TableCell>
              ))}
              <TableCell>
                {" "}
                <Button startIcon={<AddIcon />} onClick={addNewRecordModal}>
                  ADD RECORD
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ borderBottomColor: "green" }}>
                    <Typography>Add Record</Typography>
                  </TableCell>
                  <TableCell sx={{ borderBottomColor: "green" }} />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <TextField
                      id="outlined-basic"
                      label="ID"
                      variant="outlined"
                      value={idTable}
                      onChange={(event) => {
                        setIdTable(event.target.value);
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-basic"
                      label="Mapping Type"
                      variant="outlined"
                      value={mappingType}
                      onChange={(event) => {
                        setMappingType(event.target.value);
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <TextField
                      id="outlined-basic"
                      label="Mapping ID"
                      variant="outlined"
                      value={mappingId}
                      onChange={(event) => {
                        setMappingId(event.target.value);
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="outlined-basic"
                      label="Launch Name"
                      variant="outlined"
                      value={launchName}
                      onChange={(event) => {
                        setLaunchName(event.target.value);
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottomColor: "green" }}>
                    <TextField
                      id="outlined-basic"
                      label="Department"
                      variant="outlined"
                      value={departmentName}
                      onChange={(event) => {
                        setDepartmentName(event.target.value);
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ borderBottomColor: "green" }} />
                </TableRow>
                <TableRow>
                  <TableCell align="right" sx={{ borderBottomColor: "green" }}>
                    <Button onClick={handleTest}>Save</Button>
                  </TableCell>
                  <TableCell align="left" sx={{ borderBottomColor: "green" }}>
                    <Button onClick={handleClose}>Cancel</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </>
  );
}
export default CollapsibleTableTest;
