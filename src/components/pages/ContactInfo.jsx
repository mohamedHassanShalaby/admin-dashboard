import Navbar from "../navbar/Navbar";
import "./page.css";
import "../navbar/navbar.css";
import Titles from "../Title";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { rowContacts } from "../../data/rowContacts";
const columns = [
  { field: "id", headerName: "ID", headerAlign: "center", flex: 0.5 },
  { field: "registerId", headerName: "Register ID" },
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
    field: "city",
    headerName: "City",
    flex: 1,
    headerAlign: "center",
  },
];
const paginationModel = { page: 0, pageSize: 5 };

export default function ContactInfo({ openMenu }) {
  return (
    <div style={{ padding: "20px" }}>
      <Navbar openMenu={openMenu} />
      <section>
        <Titles title="CONTACTS" desc="List of Contacts for Future Reference" />
        <div className="scroll" style={{ marginTop: "50px" }}>
          <Paper sx={{ height: "75vh", width: "100%" }}>
            <DataGrid
              rows={rowContacts}
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
                "& .MuiDataGrid-toolbarContainer, & .MuiDataGrid-toolbar": {
                  backgroundColor: "#101010",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "10px",
                  borderBottom: "1px solid #101010",
                },
                "& .MuiDataGrid-toolbarContainer button, & .MuiDataGrid-toolbar button":
                  {
                    color: "#fff",
                    fontWeight: "bold",
                    transition: ".5s",
                  },
                "& .MuiDataGrid-toolbarContainer button:hover, & .MuiDataGrid-toolbar button:hover":
                  {
                    color: "#1958d6",
                  },
              }}
              showToolbar
            />
          </Paper>
        </div>
      </section>
    </div>
  );
}
