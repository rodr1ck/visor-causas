import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BarChart from "./BarChart";
import { FaHeart, FaRegHeart } from "react-icons/fa";
//import { DataGrid } from "@material-ui/data-grid";
import { DataGrid } from "@material-ui/data-grid";
import NativeSelect from "@mui/material/NativeSelect";
import Chart from "react-apexcharts";
import { fontWeight } from "@mui/system";

const Body = (props) => {
  const [age, setAge] = useState("Selecciona Año");
  const [yearFilter, setYearFilter] = useState("");

  const [dataChart, setDataChart] = useState(
    props.allData.filter(
      (x) => x.year == 2014 && x.illness == props.illnessSelected
    )
  );

  console.log("dataChart: ", dataChart);
  console.log("ilness Selected: ", props.illnessSelected);
  //console.log("All data: ", props.allData);

  /*   const handleChange = (event) => {
    setAge(event.target.value);
  }; */

  const rows = [
    {
      id: 1,
      descripcion: "Hello1",
      fechaCreacion: "2021-12-12",
      vigente: true,
    },
    {
      id: 2,
      descripcion: "Hello2",
      fechaCreacion: "2021-12-12",
      vigente: true,
    },
    {
      id: 3,
      descripcion: "Hello3",
      fechaCreacion: "2021-12-12",
      vigente: true,
    },
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

  const handleChangeSelect = (event) => {
    setYearFilter(event.target.value);
    console.log("cambio año", event.target.value);
    const newAll = props.allData.filter(
      (x) => x.year == event.target.value && x.illness == props.illnessSelected
    );
    console.log("newAll: ", newAll);
    setDataChart(newAll);
  };

  const cat = dataChart.map((x) => x.month);

  const cases = dataChart.map((x) => x.cases);

  const dataTabla = dataChart.map((x, key) => (
    <tr key={key} style={{ fontSize: "1rem"}}>
      <td style={{padding:'1px 5px'}}>{x.month}</td>
      <td style={{padding:'1px 5px'}}>{x.cases}</td>
    </tr>
  ));

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: cat,
    },
  };
  const series = [
    {
      name: "series-1",
      data: cases,
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
            {props.illnessSelected} <FaHeart />
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Año
              </InputLabel>
              <NativeSelect
                defaultValue={2014}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
                onChange={handleChangeSelect}
              >
                <option value={2014}>2014</option>
                <option value={2015}>2015</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          {/* <BarChart dataChart={dataChart}/> */}

          <Chart options={options} series={series} type="bar" width="500" />
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <table style={{ border: "1px solid black", padding: "5px" }}>
            <tr style={{ backgroundColor: "gray", color:'white', fontWeight:'bold' }}>
              <th style={{padding:'2px 5px'}}>Mes</th>
              <th style={{padding:'2px 5px'}}>Casos</th>
            </tr>
            {dataTabla}
          </table>
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
