import Navbar from "../navbar/Navbar";
import "./page.css";
import "../navbar/navbar.css";
import Titles from "../Title";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { rows } from "../../data/Rows";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityIcon from "@mui/icons-material/Security";
import { IoLockOpenOutline } from "react-icons/io5";
const columns = [
  { field: "id", headerName: "ID", width: 70, headerAlign: "center" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "access",
    headerName: "Access Level",
    flex: 1,
    headerAlign: "center",
    renderCell: ({ row }) => {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {row.access === "admin" && (
            <div
              style={{
                backgroundColor: "green",
                padding: "4px 15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
                width: "80px",
                height: "20px",
                borderRadius: "6px",
              }}
            >
              <AdminPanelSettingsIcon />
              <span>Admin</span>
            </div>
          )}

          {row.access === "manager" && (
            <div
              style={{
                backgroundColor: "green",
                padding: "4px 15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
                width: "80px",
                height: "20px",
                borderRadius: "6px",
              }}
            >
              <SecurityIcon />
              <span>Manager</span>
            </div>
          )}

          {row.access === "user" && (
            <div
              style={{
                backgroundColor: "green",
                padding: "4px 15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
                marginTop: "10px",
                width: "80px",
                height: "20px",
                borderRadius: "6px",
              }}
            >
              <IoLockOpenOutline
                style={{ fontSize: "20px", fontWeight: "bold" }}
              />
              <span>User</span>
            </div>
          )}
        </div>
      );
    },
  },
];
const paginationModel = { page: 0, pageSize: 5 };

export default function ManageTeam({ openMenu }) {
  return (
    <div style={{ padding: "20px" }}>
      <Navbar openMenu={openMenu} />
      <section>
        <Titles title="TEAM" desc="Managing the Team Members" />
        <div className="scroll" style={{ marginTop: "50px" }}>
          <Paper sx={{ height: "75vh", width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{
                border: 0,
                // HEADER
                "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeader": {
                  backgroundColor: "#1958d6 !important",
                  color: "#fff",
                },

                // ROWS (CONTENT)
                "& .MuiDataGrid-row": {
                  backgroundColor: "#101010",
                  color: "#ffffff",
                  border: "none",
                },
                "& .MuiDataGrid-row:hover": {
                  backgroundColor: "#212020",
                  cursor: "pointer",
                },

                "& .MuiDataGrid-cell": {
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },

                // FOOTER
                "& .MuiDataGrid-footerContainer": {
                  backgroundColor: "rgb(49, 49, 252)",
                  color: "#fff",
                },
                "& .Mui-selected": {
                  backgroundColor: "#333 !important",
                  color: "#fff",
                },
                // PAGINATION TEXT
                "& .MuiTablePagination-root": {
                  color: "#fff",
                },
                "& .css-1tdeh38": {
                  backgroundColor: "#101010",
                },
                // CHECKBOX
                "& .MuiCheckbox-root": {
                  color: "rgb(6, 6, 132)",
                },
                "& .name-column--cell": {
                  color: "rgb(49, 49, 252)",
                  fontWeight: "bold",
                },
                "& .MuiDataGrid-main": {
                  overflow: "auto",
                },

                "& .MuiDataGrid-sortIcon": {
                  color: "rgb(49, 49, 252)",
                  opacity: 1,
                  fontSize: "17px",
                  width: "15px",
                  height: "15px",
                },
                // زرار menu اللي في الهيدر
                "& .MuiDataGrid-menuIcon button": {
                  color: "#fff",
                },
              }}
            />
          </Paper>
        </div>
      </section>
    </div>
  );
}
