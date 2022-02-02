import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BarChart from "./BarChart";
//import { DataGrid } from "@material-ui/data-grid";
import { DataGrid } from "@material-ui/data-grid";

const Body = () => {
  const [age, setAge] = React.useState("Selecciona Año");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const rows = [
    { id: 1, descripcion: "Hello1", fechaCreacion: "2021-12-12", vigente: true },
    { id: 2, descripcion: "Hello2", fechaCreacion: "2021-12-12", vigente:true },
    { id: 3, descripcion: "Hello3", fechaCreacion: "2021-12-12", vigente:true },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "descripcion",
      headerName: "Descripcion",
      width: 250,
    },
    {
      field: "fechaCreacion",
      headerName: "Fecha creacion",
      width: 250,
    },
    {
      field: "vigente",
      headerName: "Vigente",
      width: 250,
    },
  ];

  return (
    <div className="body-style">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h6" component="h4">
            All cause
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Age"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <MenuItem value="">
                <em>Elige un año</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center", padding: '20px' }}
        >
          <BarChart />
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ height: 200, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={40}
              rowsPerPageOptions={[40]}
              density={"compact"}
              disableSelectionOnClick
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
