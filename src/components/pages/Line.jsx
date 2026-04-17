import "./page.css";
import "../navbar/navbar.css";
import Navbar from "../navbar/Navbar";
import Titles from "../Title";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
export default function Lines({ openMenu }) {
  const data = {
    labels: [
      "plane",
      "helicopter",
      "boat",
      "train",
      "subway",
      "bus",
      "car",
      "moto",
      "bicycle",
      "horse",
      "skateboard",
      "others",
    ],
    datasets: [
      {
        label: "us",
        data: [500, 400, 400, 420, 300, 550, 300, 510, 390, 290, 440, 440],
        borderColor: "rgb(248, 100, 125)",
        backgroundColor: "rgb(248, 100, 125)",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "france",
        data: [300, 280, 300, 220, 110, 410, 110, 220, 390, 0, 20, 5],
        borderColor: "blue",
        backgroundColor: "blue",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "japan",
        data: [100, 90, 20, 210, 20, 235, 100, 220, 290, 0, 20, 10],
        borderColor: "green",
        backgroundColor: "green",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        stacked: true,
        ticks: { font: { size: 14 } },
        grid: {
          display: true, // الخطوط العمودية
          color: "rgba(200,200,200,0.3)",
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        // max: 30000, // خلي البار قصير شويه
        grid: {
          display: true, // الخطوط الأفقية
          color: "rgba(200,200,200,0.3)",
        },
      },
    },
  };
  return (
    <div style={{ padding: "20px" }}>
      <Navbar openMenu={openMenu} />
      <section>
        <Titles title={"Line Chart"} desc={"Simple Line Chart"} />
        <div className="chart-wrapper">
          <Line data={data} options={options} />
        </div>
      </section>
    </div>
  );
}
