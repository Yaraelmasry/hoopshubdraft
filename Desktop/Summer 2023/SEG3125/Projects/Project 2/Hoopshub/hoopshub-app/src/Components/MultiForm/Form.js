import React, { useState } from "react";
import RegisterInfo from "./RegisterInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";


function Form() {
  
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    courtleague: "",
    date: "",
    time: "",
    card: "",
    cvv: "",
    expiry:"",
  });

  const FormTitles = ["Personal Info", "Reservation Info", "Payment"];

  const PageDisplay = () => {
    if (page === 0) {
      return <RegisterInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    
    <div className="form">
      <h3>Registration Form</h3>
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "30%" : page == 1 ? "60%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;