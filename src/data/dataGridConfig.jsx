import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";


export const dataGridColumns = (colors, component) => {
  const teamColumn = [
    { field: "id", headerName: "ID"},
    { field: "name", headerName: "NAME", flex: 1, cellClassName: "name-column--cell" },
    { field: "age", headerName: "AGE",  type: "number", headerAlign: "left", align: "left" },
    { field: "phone", headerName: "PHONE NUMBER", flex: 1 },
    { field: "email", headerName: "EMAIL", flex: 1 },
    { field: "access", headerName: "ACCESS LEVEL", flex: 1, renderCell: ({row: {access}}) => {
      return (
        <Box
          color={colors.customColors[300]}
          width="90%"
          p="5px"
          display="flex"
          backgroundColor={
            () => (
              access === "admin" ? colors.greenAccent[400] 
              : access === "manager" ? colors.blueAccent[400]
              : colors.redAccent[400]
            )
          }
          borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          {access === "manager" && <SecurityOutlinedIcon />}
          {access === "user" && <LockOpenOutlinedIcon />}
            <Typography margin="auto" textTransform="uppercase">
              {access}
            </Typography>
        </Box>
      );
    }}
  ]

  const contactsColumn = [
    { field: "id", headerName: "ID", flex: 0.5},
    { field: "registrarId", headerName: "Registrar ID"},
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "age", headerName: "Age",  type: "number", headerAlign: "left", align: "left" },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "ZipCode", flex: 1 }
  ]

  const invoicesColumn = [
    { field: "id", headerName: "ID"},
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "cost", headerName: "Cost", flex: 1,
      renderCell: (params) => {
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      }
    },
    { field: "date", headerName: "Date", flex: 1 },
  ]

  switch (component) {
    case "team": return teamColumn;
      break;
    case "contacts": return contactsColumn;
      break;
    case "invoices": return invoicesColumn;
      break;
    default: null;
  }
}


