import "./page.css";
import "../navbar/navbar.css";
import Navbar from "../navbar/Navbar";
import AccordionComp from "./AccordionComp";
import Titles from "../Title";

export default function FAQ({ openMenu }) {
  return (
    <div style={{ padding: "20px" }}>
      <Navbar openMenu={openMenu} />
      <section>
        <Titles title="FAQ" desc="Frequently Asked Questions Page" />
        <div>
          <AccordionComp typo="An Important Question" />
          <AccordionComp typo="Another Important Question" />
          <AccordionComp typo="Your Favorite Question" />
          <AccordionComp typo="Some Random Question" />
          <AccordionComp typo="The Final Question" />
        </div>
      </section>
    </div>
  );
}
