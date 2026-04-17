import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function AccordionComp({ typo }) {
  return (
    <Accordion
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "white",
        borderTop: "1px solid #292828",
        marginTop: "0px"
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon style={{ color: "#fff" }} />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span" style={{ color: "rgb(49, 49, 252)" }}>
          {typo}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
