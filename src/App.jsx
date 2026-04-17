import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/pages/Dashboard";
import { Route, Routes } from "react-router";
import ManageTeam from "./components/pages/ManageTeam";
import ContactInfo from "./components/pages/ContactInfo";
import Invoices from "./components/pages/Invoices";
import Profile from "./components/pages/Profile";
import Calender from "./components/pages/Calender";
import FAQ from "./components/pages/FAQ";
import Lines from "./components/pages/Line";
import Geographys from "./components/pages/Geography";
import Barc from "./components/pages/Bar";
import Pies from "./components/pages/Pie";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Routes>
        <Route path="/" element={<Dashboard openMenu={openMenu} />} />
        <Route path="/manage" element={<ManageTeam openMenu={openMenu} />} />
        <Route
          path="/contactInfo"
          element={<ContactInfo openMenu={openMenu} />}
        />
        <Route path="/invoices" element={<Invoices openMenu={openMenu} />} />
        <Route path="/profile" element={<Profile openMenu={openMenu} />} />
        <Route path="/calender" element={<Calender openMenu={openMenu} />} />
        <Route path="/faq" element={<FAQ openMenu={openMenu} />} />
        <Route path="/bar" element={<Barc openMenu={openMenu} />} />
        <Route path="/pie" element={<Pies openMenu={openMenu} />} />
        <Route path="/line" element={<Lines openMenu={openMenu} />} />
        <Route path="/geography" element={<Geographys openMenu={openMenu} />} />
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
