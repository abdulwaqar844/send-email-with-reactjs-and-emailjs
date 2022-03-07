import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";

function App() {
  init("user_aVMjgLam4rroy8ETgabF9");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5k4pz0m",
        "template_z9tirsn",
        form.current,
        "user_aVMjgLam4rroy8ETgabF9"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} ref={form}>
        <h1 className="text-center">Registration Form</h1>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="First Name">First Name</label>
            <input type="text" className="form-control" name="firstname" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Last Name">Last Name</label>
            <input type="text" className="form-control" name="lastname" />
          </div>
          <div className="form-group col-12">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              name="user_address"
            />
          </div>{" "}
          <div className="form-group col-md-6">
            <label htmlFor="message">message</label>
            <textarea
              type="text"
              className="form-control"
              id="inputmessage4"
              name="user_message"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default App;
