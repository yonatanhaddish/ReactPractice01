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
    id: Math.random() * (10000 - 1) + 1,
    mapping_type: "MappingTypeOne",
    mapping_id: "mappingIdOne",
    launch_name: "LaunchNameOne",
    role: "roleOne",
    history: [
      {
        id: Math.random() * (10000 - 1) + 1,
        test_history: "RowOneTestOne",
      },
      {
        id: Math.random() * (10000 - 1) + 1,
        test_history: "RowOneTestTwo",
      },
      {
        id: Math.random() * (10000 - 1) + 1,
        test_history: "RowOneTestThree",
      },
    ],
  },
  {
    id: Math.random() * (10000 - 1) + 1,
    mapping_type: "MappingTypeTwo",
    mapping_id: "mappingIdTwo",
    launch_name: "LaunchNameTwo",
    role: "roleTwo",
    history: [
      {
        id: Math.random() * (10000 - 1) + 1,
        test_history: "RowOTwoTestOne",
      },
      {
        id: Math.random() * (10000 - 1) + 1,
        test_history: "RowTwoTestTwo",
      },
      {
        id: Math.random() * (10000 - 1) + 1,
        test_history: "RowTwoTestThree",
      },
    ],
  },
  {
    id: Math.random() * (10000 - 1) + 1,
    mapping_type: "MappingTypeThree",
    mapping_id: "mappingIdThree",
    launch_name: "LaunchNameThree",
    role: "roleThree",
    history: [
      {
        id: Math.random() * (10000 - 1) + 1,
        test_history: "RowThreeTestOne",
      },
      {
        id: Math.random() * (10000 - 1) + 1,
        test_history: "RowThreeTestTwo",
      },
      {
        id: Math.random() * (10000 - 1) + 1,
        test_history: "RowThreeTestThree",
      },
    ],
  },
];

function CollapsibleTableTest() {
  const [data, setData] = useState(rows);
  const [dataEdited, setDataEdited] = useState({});
  const [openAddRecordModal, setOpenAddRecordModal] = useState(false);
  const [openEditRecordModal, setOpenEditRecordModal] = useState(false);
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
    setOpenAddRecordModal(true);
  }
  function editRecordModal() {
    setOpenEditRecordModal(true);
    setIdTable(idTable);
    console.log(idTable);
  }
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenAddRecordModal(false);
    setOpenEditRecordModal(false);
    setIdTable("");
    setMappingType("");
    setMappingId("");
    setLaunchName("");
    setDepartmentName("");
  };
  function handleSaveNewRecord() {
    setData([
      ...data,
      {
        id: Math.random() * (10000 - 1) + 1,
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
    console.log(data.history);
  }
  function handleSaveSelectedEdit() {
    let dataEdited = data.find((e) => e.id === idTable);
    let updatedRow = data.filter((d) => d.id !== idTable);

    console.log(dataEdited);
    setMappingType(dataEdited.mapping_type);
    setLaunchName(dataEdited.launch_name);
    setDepartmentName(dataEdited.role);
  }

  function Row({ row, editedRow }) {
    const [open, setOpen] = useState(false);
    function handleIconToggle(params) {
      setOpen(!open);
    }
    function handleEditRow() {
      editRecordModal(true);
      const editedRow = row;

      setDataEdited(editedRow);
      console.log(editedRow);
      setIdTable(editedRow.id);
      setMappingType(editedRow.mapping_type);
      setMappingId(editedRow.mapping_id);
      setLaunchName(editedRow.launch_name);
      setDepartmentName(editedRow.role);
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
              <Box key={row.id}>
                <Paper key={row.id} sx={{ height: 50 }}>
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
        open={openAddRecordModal}
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
                    <Button onClick={handleSaveNewRecord}>Save</Button>
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
      <Modal
        open={openEditRecordModal}
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
                    <Typography>Edit Record</Typography>
                  </TableCell>
                  <TableCell sx={{ borderBottomColor: "green" }} />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <TextField
                      disabled
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
                      // label={mappingType}
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
                      disabled
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
                    <Button onClick={handleSaveSelectedEdit}>Save</Button>
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
