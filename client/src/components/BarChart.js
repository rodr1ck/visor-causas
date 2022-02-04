import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    console.log("dataChart: ", props.dataChart)
    const cat = props.dataChart.map(x => x.month)

    const cases = props.dataChart.map(x => x.cases)

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: cat
        }
      },
      series: [
        {
          name: "series-1",
          data: cases
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;