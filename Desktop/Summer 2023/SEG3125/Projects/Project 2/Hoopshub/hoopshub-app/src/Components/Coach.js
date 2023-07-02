import "./CoachStyles.css";
import CoachData from "./CoachData";
import Coach1 from "../assets/khan.jpg";
import Coach2 from "../assets/mustard.jpg";
import Coach3 from "../assets/white.jpg";

function Coach() {
  return (
    <div className="coach">
      <h1>Our Coaches</h1>
      <div className="coachcard">
        <CoachData
          image={Coach1}
          heading="Chindi Khan"
          text="Fringilla curae; penatibus ad mattis consectetur dictum himenaeos? Accumsan cubilia magna ut tempus sodales scelerisque erat. Sem fusce odio porttitor nullam. 
          Sociis rhoncus facilisi nascetur risus gravida et primis a in urna etiam natoque."
        />
        <CoachData
          image={Coach2}
          heading="Jack Mustard"
          text="Fringilla curae; penatibus ad mattis consectetur dictum himenaeos? Accumsan cubilia magna ut tempus sodales scelerisque erat. Sem fusce odio porttitor nullam. 
          Sociis rhoncus facilisi nascetur risus gravida et primis a in urna etiam natoque."
        />
        <CoachData
          image={Coach3}
          heading="Mathias White"
          text="Fringilla curae; penatibus ad mattis consectetur dictum himenaeos? Accumsan cubilia magna ut tempus sodales scelerisque erat. Sem fusce odio porttitor nullam. 
          Sociis rhoncus facilisi nascetur risus gravida et primis a in urna etiam natoque."
        />
      </div>
   
    </div>
  );
}

export default Coach;
