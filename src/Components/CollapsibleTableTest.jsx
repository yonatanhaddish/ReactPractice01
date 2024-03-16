import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const CollapsibleTableTest = () => {
  const [expandedRowId, setExpandedRowId] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleExpand = (rowId) => {
    if (expandedRowId === rowId) {
      setExpandedRowId(null);
    } else {
      setExpandedRowId(rowId);
    }
  };

  const handleCellClick = (params) => {
    if (params.field === "id") {
      handleToggleExpand(params.row.id);
    } else if (params.field === "test-type") {
      setSelectedRow(params.row);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Define your columns and rows here
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150, editable: true },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    { field: "test-type", headerName: "Test Type", width: 150 },
  ];

  const rows = [
    { id: 1, name: "John Doe", age: 30, "test-type": "Type A" },
    { id: 2, name: "Jane Smith", age: 25, "test-type": "Type B" },
    { id: 3, name: "Alice Johnson", age: 35, "test-type": "Type C" },
    { id: 4, name: "Bob Brown", age: 40, "test-type": "Type A" },
  ];

  const expandedRowContent = (
    <div>
      {/* Your expanded row content here */}
      <p>This is the expanded row content.</p>
    </div>
  );

  return (
    <div>
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Modal Title</DialogTitle>
        <DialogContent>
          {/* Your modal content here */}
          <p>This is the modal content.</p>
        </DialogContent>
      </Dialog>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} onCellClick={handleCellClick}>
          {(params) => (
            <Button onClick={() => handleToggleExpand(params.row.id)}>
              {expandedRowId === params.row.id ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </Button>
          )}
          {(params) => (
            <div style={{ backgroundColor: "#f5f5f5", padding: "10px" }}>
              {expandedRowId === params.row.id && expandedRowContent}
            </div>
          )}
        </DataGrid>
      </div>
    </div>
  );
};

export default CollapsibleTableTest;
