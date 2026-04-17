import "./page.css";
import "../navbar/navbar.css";
import Navbar from "../navbar/Navbar";
import Titles from "../Title";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Pies({ openMenu }) {
  const data = {
    labels: ["hack", "make", "go", "lisp", "scala"],
    datasets: [
      {
        data: [15, 20, 18, 25, 30],
        backgroundColor: [
          "#dcd6d6", // hack
          "#ff6b6b", // make
          "#ffe66d", // go
          "#f5a623", // lisp
          "#2ec4b6", // scala
        ],
        borderWidth: 2,
        borderColor: "#111", // يفصل بين القطع
      },
    ],
  };

  const options = {
    cutout: "50%", // يخليها donut
    hoverOffset: 30,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <Navbar openMenu={openMenu} />
      <section>
        <Titles title={"Pie Chart"} desc={"Simple Pie Chart"} />
        <div style={{ width: "400px", margin: "auto" }}>
          <Doughnut data={data} options={options} />
        </div>
      </section>
    </div>
  );
}
