import "./report.css";
import { MdEmail } from "react-icons/md";
import { MdOutlinePointOfSale } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { FaTrafficLight } from "react-icons/fa";

export default function Report() {
  const dataReport = [
    {
      id: 1,
      icon: <MdEmail />,
      number: "12,361",
      title: "Emails Sent",
      recent: "+14%",
    },
    {
      id: 2,
      icon: <MdOutlinePointOfSale />,
      number: "431,225",
      title: "Sales Obtained",
      recent: "+21%",
    },
    {
      id: 3,
      icon: <IoMdPersonAdd />,
      number: "32,441",
      title: "New Clients",
      recent: "+5%",
    },
    {
      id: 4,
      icon: <FaTrafficLight />,
      number: "1,325,134",
      title: "Traffic Received",
      recent: "+43%",
    },
  ];
  return (
    <section className="report">
      {dataReport.map((report) => (
        <div key={report.id} className="container">
          <div className="report-icons">
            <div className="icon">{report.icon}</div>
            <h3>{report.number}</h3>
            <p>{report.title}</p>
          </div>
          <div className="report-recent">
            <div className="circle"></div>
            <p>{report.recent}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
