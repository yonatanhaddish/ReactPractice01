import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const MyDataGrid = ({ rows, columns, onCellClick }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
        onCellClick={onCellClick}
      />
    </div>
  );
};

const CollapsibleTableTest = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCellClick = (params) => {
    if (params.field === "age") {
      setSelectedRow(params.row);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", width: 130 },
    { field: "lastName", headerName: "Last Name", width: 130 },
    { field: "age", headerName: "Age", type: "number", width: 90 },
    { field: "email", headerName: "Email", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 35,
      email: "john.doe@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      age: 32,
      email: "jane.doe@example.com",
    },
    {
      id: 3,
      firstName: "Andy",
      lastName: "Smith",
      age: 28,
      email: "andy.smith@example.com",
    },
    // Add more rows as needed
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <MyDataGrid rows={rows} columns={columns} onCellClick={handleCellClick} />
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "20px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-modal-title">Selected Row</h2>
          <p id="modal-modal-description">
            First Name: {selectedRow?.firstName}
          </p>
          <Button onClick={handleCloseModal}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default CollapsibleTableTest;
