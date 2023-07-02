import React from "react";
import "./MultiForm.css";

function RegisterInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Phone Number.."
        value={formData.phonenumber}
        onChange={(event) =>
          setFormData({ ...formData, phonenumber: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Email.."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
    </div>
  );
}

export default RegisterInfo;