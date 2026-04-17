import ChartLine from "../chartsLine/ChartLine";
import Transction from "../chartsLine/Transction";
import Download from "../Download";
import Navbar from "../navbar/Navbar";
import Report from "../reports/Report";
import "./page.css";
import DoughnutChart from "../charts/DoughnutChart";
import BarChart from "../charts/BarChart";
import GeographyChart from "../charts/GeographyChart";
import Titles from "../Title";
export default function Dashboard({ openMenu }) {
  return (
    <div style={{ padding: "20px" }}>
      <Navbar openMenu={openMenu} />
      <div className="title">
        <Titles title="DASHBOARD" desc="Welcome to your dashboard" />
        <Download />
      </div>
      <Report />
      <div className="chart-line">
        <ChartLine />
        <Transction />
      </div>

      <div className="charts">
        <DoughnutChart />
        <BarChart />
        <GeographyChart />
      </div>
    </div>
  );
}
