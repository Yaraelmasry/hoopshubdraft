import React from "react";
import "./MultiForm.css";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Court/League..."
        value={formData.courtleague}
        onChange={(e) => {
          setFormData({ ...formData, courtleague: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter Date..."
        value={formData.date}
        onChange={(e) => {
          setFormData({ ...formData, date: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter Time"
        value={formData.time}
        onChange={(e) => {
          setFormData({ ...formData, time: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;