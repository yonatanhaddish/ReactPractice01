import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function CollapsibleTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Add Record</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Mapping Type</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mapping ID</TableCell>
              <TableCell>Launch Name</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Department</TableCell>
            </TableRow>
            <TableRow>
              <TableCell />
              <TableCell>Save</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

{
  /* <TableCell>
{" "}
<TextField
  label="With normal TextField"
  id="outlined-start-adornment"
  sx={{ width: "15ch" }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">kg</InputAdornment>
    ),
  }}
/>
</TableCell> */
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// import SaveIcon from "@mui/icons-material/Save";
// import CancelIcon from "@mui/icons-material/Close";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import { Modal, Paper } from "@mui/material";
// import { TableRow } from "@material-ui/core";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import { Stack, ListItemButton, ListItemText } from "@mui/material";
// import AccordionActions from "@mui/material/AccordionActions";
// import { Chip } from "@mui/material";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

// import {
//   GridRowModes,
//   DataGrid,
//   GridToolbarContainer,
//   GridActionsCellItem,
//   GridRowEditStopReasons,
// } from "@mui/x-data-grid";
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomId,
//   randomArrayItem,
//   randomCompanyName,
// } from "@mui/x-data-grid-generator";

// const roles = ["Market", "Finance", "Development"];
// const test_type_array = ["Test01", "Test02", "Test03"];
// const randomRole = () => {
//   return randomArrayItem(roles);
// };

// const initialRows = [
//   {
//     id: randomId(),
//     id_table: 10,
//     mapping_type: randomTraderName(),
//     mapping_id: 123,
//     launch_name: randomCompanyName(),
//     role: randomRole(),
//   },
//   {
//     id: randomId(),
//     id_table: 20,
//     mapping_type: randomTraderName(),
//     mapping_id: 623,
//     launch_name: randomCompanyName(),
//     role: randomRole(),
//   },
//   {
//     id: randomId(),
//     id_table: 30,
//     mapping_type: randomTraderName(),
//     mapping_id: 233,
//     launch_name: randomCompanyName(),
//     role: randomRole(),
//   },
//   {
//     id: randomId(),
//     id_table: 40,
//     mapping_type: randomTraderName(),
//     mapping_id: 2345,
//     launch_name: randomCompanyName(),
//     role: randomRole(),
//   },
//   {
//     id: randomId(),
//     id_table: 50,
//     mapping_type: randomTraderName(),
//     mapping_id: 253,
//     launch_name: randomCompanyName(),
//     role: randomRole(),
//   },
// ];

// function CollapsibleTable() {
//   const [rows, setRows] = React.useState(initialRows);
//   const [rowModesModel, setRowModesModel] = React.useState({});
//   const [toogleIcon, setToggleIcon] = React.useState(rows);
//   const [isExpanded, setIsExpanded] = React.useState(false);
//   const [open, setOpen] = React.useState(false);
//   const [collapseRow, setCollapseRow] = React.useState(null);

//   const [selectedRow, setSelectedRow] = React.useState(null);
//   const [isModalOpen, setIsModalOpen] = React.useState(false);

//   function EditToolbar(props) {
//     const { setRows, setRowModesModel } = props;

//     const handleClick = () => {
//       const id = randomId();
//       setRows((oldRows) => [
//         ...oldRows,
//         { id, name: "", age: "", role: "Market", isNew: true },
//       ]);
//       setRowModesModel((oldModel) => ({
//         ...oldModel,
//         [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
//       }));
//     };

//     return (
//       <GridToolbarContainer>
//         <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//           Add record
//         </Button>
//       </GridToolbarContainer>
//     );
//   }

//   const handleRowEditStop = (params, event) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };

//   const handleEditClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   };

//   const handleSaveClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleDeleteClick = (id) => () => {
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const handleCancelClick = (id) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { mode: GridRowModes.View, ignoreModifications: true },
//     });

//     const editedRow = rows.find((row) => row.id === id);
//     if (editedRow.isNew) {
//       setRows(rows.filter((row) => row.id !== id));
//     }
//   };

//   const processRowUpdate = (newRow) => {
//     const updatedRow = { ...newRow, isNew: false };
//     setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//     return updatedRow;
//   };

//   const handleRowModesModelChange = (newRowModesModel) => {
//     setRowModesModel(newRowModesModel);
//   };

//   function handleIconClick(params) {
//     const isExpanded = params.row;
//     isExpanded.expanded = !isExpanded.expanded;
//     setToggleIcon([...rows]);
//   }
//   // function handleClickTest(params) {}
//   const handleOpenTest = () => {
//     setOpen(true);
//     console.log(open);
//   };
//   const handleCloseTest = () => {
//     setOpen(false);
//     console.log(open);
//   };
//   const handleCollapseRow = (rowId) => {
//     setCollapseRow(collapseRow === rowId ? null : rowId);
//   };
//   function renderCellDynamic(params) {
//     const [isExpanded, setIsExpanded] = React.useState(false);

//     function handleToggleIcon() {
//       setIsExpanded(false);
//       // console.log(params);
//       console.log(isExpanded);
//       setIsExpanded(!isExpanded);
//       console.log(isExpanded);
//     }

//     return (
//       <>
//         <Button onClick={handleToggleIcon}>
//           {!isExpanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
//         </Button>
//       </>
//     );
//   }
//   function handleCellClick(params) {
//     // setIsExpanded(isExpanded);
//     if (params.field === "test-type") {
//       setSelectedRow(params.row);
//       setIsModalOpen(true);
//       setIsExpanded(!isExpanded);
//       console.log(selectedRow);
//     }
//   }
//   const handleCloseModal = (params) => {
//     setIsModalOpen(false);
//     // setIsExpanded(true);
//     // setIsExpanded(false);
//   };

//   const columns = [
//     {
//       field: "id_table",
//       headerName: "ID",
//       type: "number",
//       width: 10,
//       editable: false,
//     },
//     {
//       field: "mapping_type",
//       headerName: "Mapping Type",
//       width: 200,
//       editable: false,
//     },
//     {
//       field: "mapping_id",
//       headerName: "Mapping ID",
//       type: "number",
//       width: 200,
//       editable: false,
//     },
//     {
//       field: "launch_name",
//       headerName: "Launch Name",
//       width: 200,
//       editable: true,
//     },
//     {
//       field: "test-type",
//       headerName: "Test Type",
//       width: 200,
//       editable: false,
//       renderCell: renderCellDynamic,
//     },

//     // {
//     //   field: "age",
//     //   headerName: "Age",
//     //   type: "number",
//     //   width: 80,
//     //   align: "left",
//     //   headerAlign: "left",
//     //   editable: true,
//     // },
//     // {
//     //   field: "joinDate",
//     //   headerName: "Join date",
//     //   type: "date",
//     //   width: 180,
//     //   editable: true,
//     // },
//     {
//       field: "role",
//       headerName: "Department",
//       width: 220,
//       editable: true,
//       action: "actions",
//       valueOptions: ["Market", "Finance", "Development", "Admin"],
//     },
//     {
//       field: "actions",
//       type: "actions",
//       headerName: "Actions",
//       width: 100,
//       cellClassName: "actions",
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label="Save"
//               sx={{
//                 color: "primary.main",
//               }}
//               onClick={handleSaveClick(id)}
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               label="Cancel"
//               className="textPrimary"
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />,
//           ];
//         }

//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             label="Edit"
//             className="textPrimary"
//             onClick={handleEditClick(id)}
//             color="inherit"
//           />,
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             onClick={handleDeleteClick(id)}
//             color="inherit"
//           />,
//         ];
//       },
//     },
//   ];

//   return (
//     <>
//       {/* <Box>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           editMode="row"
//           rowModesModel={rowModesModel}
//           onCellClick={handleCellClick}
//           onRowModesModelChange={handleRowModesModelChange}
//           onRowEditStop={handleRowEditStop}
//           processRowUpdate={processRowUpdate}
//           slots={{
//             toolbar: EditToolbar,
//           }}
//           slotProps={{
//             toolbar: { setRows, setRowModesModel },
//           }}
//         />
//       </Box> */}

//       {isExpanded ? (
//         <div
//           style={{
//             height: "100%",
//             width: "80%",
//             border: "2px solid white",
//             textAlign: "center",
//           }}
//         >
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             onCellClick={handleCellClick}
//             slots={{
//               toolbar: EditToolbar,
//             }}
//             slotProps={{
//               toolbar: { setRows, setRowModesModel },
//             }}
//           />
//         </div>
//       ) : (
//         <div
//           style={{
//             height: "100%",
//             width: "80%",
//             border: "2px solid white",
//             textAlign: "center",
//           }}
//         >
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             onCellClick={handleCellClick}
//             slots={{
//               toolbar: EditToolbar,
//             }}
//             slotProps={{
//               toolbar: { setRows, setRowModesModel },
//             }}
//           />
//         </div>
//       )}
//     </>
//   );
// }
// export default CollapsibleTable;
// {
//   /* <Modal
// open={isModalOpen}
// onClose={handleCloseModal}
// aria-labelledby="modal-modal-title"
// aria-describedby="modal-modal-description"
// >
// <Box
//   sx={{
//     position: "absolute",
//     height: 20,
//     width: "50%",
//     top: "50%",
//     left: "50%",
//     bgcolor: "white",
//     transform: "translate(-50%, -50%)",
//     border: "solid 1px",
//     borderRadius: "10px",
//     boxShadow: 24,

//     p: 2,
//   }}
// >
//   <Chip label="Chip Filled" />
//   {/* <Button onClick={handleCloseModal}>Close</Button> */
// }
// // </Box>
// // </Modal> */}
