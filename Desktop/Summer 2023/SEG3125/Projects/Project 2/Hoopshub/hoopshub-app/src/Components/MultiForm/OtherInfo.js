import React from "react";
import "./MultiForm.css";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Card Number..."
        value={formData.card}
        onChange={(e) => {
          setFormData({ ...formData, card: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="CVV..."
        value={formData.cvv}
        onChange={(e) => {
          setFormData({ ...formData, cvv: e.target.value });
        }}
      />
       <input
        type="text"
        placeholder="Expiry MM/DD"
        value={formData.expiry}
        onChange={(e) => {
          setFormData({ ...formData, expiry: e.target.value });
        }}
      />
    </div>
  );
}

export default OtherInfo;