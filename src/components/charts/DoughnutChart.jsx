import "./charts.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const data = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 3],
        backgroundColor: ["#101010", "rgb(49, 49, 252)"],
        borderColor: ["#101010", "rgb(49, 49, 252)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    cutout: "75%",
  };

  return (
    <section className="doughnut">
      <h3>Campaign</h3>
      <div>
        <Doughnut data={data} options={options} />
      </div>
      <div className="doughnut-content">
        <p className="doughnut-revenue">$48,352 revenue generated</p>
        <p>Includes extra misc expenditures and costs</p>
      </div>
    </section>
  );
}
