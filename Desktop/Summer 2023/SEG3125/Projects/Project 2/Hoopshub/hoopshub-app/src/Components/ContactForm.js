import "../Components/ContactForm.css";

function ContactForm() {
  return (
    <>
      <div className="form-container1">
        <h1>Send a message to us!</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <input placeholder="Phone Number"/>
          <textarea placeholder="Message" rows="4"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;