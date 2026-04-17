import { IoMenu } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdOutlinePersonPin } from "react-icons/md";
import { LuSquareMenu } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { MdOutlinePieChart } from "react-icons/md";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { CiMap } from "react-icons/ci";

import ana from "../../assets/ana.jpg";
import "./sidebar.css";
import { Link } from "react-router";
import { useState } from "react";
export default function Sidebar({ openMenu, setOpenMenu }) {
  const [active, setActive] = useState("dashboard");
  return (
    <div className={openMenu ? "close" : "side-bar"}>
      <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
        <h1
          style={{
            display: openMenu ? "none" : "",
          }}
        >
          ADMINS
        </h1>
        <IoMenu
          style={{ fontSize: "30px", margin: openMenu ? "10px 45px 30px" : "" }}
        />
      </div>
      <div className="img-name" style={{ display: openMenu ? "none" : "" }}>
        <img src={ana} alt="my photo" />
      </div>
      <div className="desc-name" style={{ display: openMenu ? "none" : "" }}>
        <h2>Mohamed Shalaby</h2>
      </div>

      <Link
        onClick={() => setActive("dashboard")}
        className={active === "dashboard" ? "icon-title active" : "icon-title"}
        to={"/"}
        style={{ marginBottom: openMenu ? "50px" : "" }}
      >
        <IoMdHome className="side-bar-icon" style={{ fontSize: "20px" }} />
        <h4 style={{ display: openMenu ? "none" : "" }}>Dashboard</h4>
      </Link>
      <ul>
        <li>Date</li>
      </ul>
      <Link
        onClick={() => setActive("manage")}
        className={active === "manage" ? "icon-title active" : "icon-title"}
        to={"/manage"}
        style={{ marginBottom: openMenu ? "50px" : "" }}
      >
        <MdOutlinePeopleOutline
          className="side-bar-icon"
          style={{ fontSize: "20px" }}
        />
        <h4 style={{ display: openMenu ? "none" : "" }}>Manage Team</h4>
      </Link>
      <Link
        onClick={() => setActive("contactInfo")}
        className={
          active === "contactInfo" ? "icon-title active" : "icon-title"
        }
        to={"/contactInfo"}
        style={{ marginBottom: openMenu ? "50px" : "" }}
      >
        <MdOutlinePersonPin
          className="side-bar-icon"
          style={{ fontSize: "20px" }}
        />
        <h4 style={{ display: openMenu ? "none" : "" }}>
          Contacts Information
        </h4>
      </Link>
      <Link
        onClick={() => setActive("invoices")}
        className={active === "invoices" ? "icon-title active" : "icon-title"}
        to={"/invoices"}
        style={{ marginBottom: openMenu ? "50px" : "" }}
      >
        <LuSquareMenu className="side-bar-icon" style={{ fontSize: "20px" }} />
        <h4 style={{ display: openMenu ? "none" : "" }}>Invoices Balances</h4>
      </Link>
      <ul>
        <li>Pages</li>
      </ul>
      <Link
        to={"/profile"}
        onClick={() => setActive("profile")}
        className={active === "profile" ? "icon-title active" : "icon-title"}
        style={{ marginBottom: openMenu ? "50px" : "" }}
      >
        <MdPerson className="side-bar-icon" style={{ fontSize: "20px" }} />
        <h4 style={{ display: openMenu ? "none" : "" }}>Profile Form</h4>
      </Link>
      <Link
        onClick={() => setActive("calender")}
        className={active === "calender" ? "icon-title active" : "icon-title"}
        to={"/calender"}
        style={{ marginBottom: openMenu ? "50px" : "" }}
      >
        <FaRegCalendar className="side-bar-icon" style={{ fontSize: "20px" }} />
        <h4 style={{ display: openMenu ? "none" : "" }}>Calender</h4>
      </Link>
      <Link
        onClick={() => setActive("faq")}
        className={active === "faq" ? "icon-title active" : "icon-title"}
        to={"/faq"}
        style={{ marginBottom: openMenu ? "50px" : "" }}
      >
        <FaRegQuestionCircle
          className="side-bar-icon"
          style={{ fontSize: "20px" }}
        />
        <h4 style={{ display: openMenu ? "none" : "" }}>FAQ Page</h4>
      </Link>
      <ul>
        <li>Charts</li>
      </ul>
      <Link
        onClick={() => setActive("bar")}
        className={active === "bar" ? "icon-title active" : "icon-title"}
        to={"/bar"}
        style={{ marginBottom: openMenu ? "50px" : "" }}
      >
        <MdBarChart className="side-bar-icon" style={{ fontSize: "20px" }} />
        <h4 style={{ display: openMenu ? "none" : "" }}>Bar Chart</h4>
      </Link>
      <Link
        onClick={() => setActive("pie")}
        className={active === "pie" ? "icon-title active" : "icon-title"}
        to={"/pie"}
        style={{ marginBottom: openMenu ? "50px" : "" }}
      >
        <MdOutlinePieChart
          className="side-bar-icon"
          style={{ fontSize: "20px" }}
        />
        <h4 style={{ display: openMenu ? "none" : "" }}>Pie Chart</h4>
      </Link>
      <Link
        onClick={() => setActive("line")}
        className={active === "line" ? "icon-title active" : "icon-title"}
        to={"/line"}
        style={{ marginBottom: openMenu ? "50px" : "" }}
      >
        <MdOutlineStackedLineChart
          className="side-bar-icon"
          style={{ fontSize: "20px" }}
        />
        <h4 style={{ display: openMenu ? "none" : "" }}>Line Chart</h4>
      </Link>
      <Link
        onClick={() => setActive("geography")}
        className={active === "geography" ? "icon-title active" : "icon-title"}
        to={"/geography"}
        style={{ marginBottom: openMenu ? "50px" : "" }}
      >
        <CiMap className="side-bar-icon" style={{ fontSize: "20px" }} />
        <h4 style={{ display: openMenu ? "none" : "" }}>Geography Chart</h4>
      </Link>
    </div>
  );
}
