import "./charts.css";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function BarChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // نتحكم في الطول
    plugins: {
      title: {
        display: true,
      },
      legend: { position: "top" },
    },
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

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const colors = [
    "rgb(15, 217, 224)",
    "rgba(75, 192, 192, 0.85)",
    "orange",
    "yellow",
    "rgb(243, 79, 79)",
    "rgb(245, 187, 187)",
  ];

  const data = {
    labels,
    datasets: colors.map((color, index) => ({
      label: `Item ${index + 1}`,
      data: labels.map(() => faker.number.int({ min: 2000, max: 6000 })), // قصير شويه
      backgroundColor: color,
      barThickness: 20, // بار رفيع عشان كل الألوان باينة
    })),
  };

  return (
    <section className="bar">
      <h3>Sales Quantity</h3>
      <div style={{ height: "85%"}}>
        <Bar options={options} data={data} />
      </div>
    </section>
  );
}
