import { FaSearch } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import "./navbar.css";
export default function Navbar({ openMenu }) {
  return (
    <div className={openMenu ? "navbar c" : "navbar"}>
      <div className="search-input">
        <input type="search" placeholder="Search" />
        <FaSearch className={openMenu ? "search-icon c" : "search-icon"} />
      </div>
      <div className="icons">
        <FaRegMoon
          style={{ marginRight: "10px", fontSize: "18px", cursor: "pointer" }}
        />
        <IoMdNotificationsOutline
          style={{ marginRight: "10px", fontSize: "18px", cursor: "pointer" }}
        />
        <IoSettingsOutline
          style={{ marginRight: "10px", fontSize: "18px", cursor: "pointer" }}
        />
        <MdPerson
          style={{ marginRight: "10px", fontSize: "18px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
