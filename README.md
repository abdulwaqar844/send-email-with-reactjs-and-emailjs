### How to Send Email From React Client using Emailjs Library

**If you have contact form in your Website and you want to recieve email when user submit data via contact form then you can learn in this tutorial how to send email with data recieved from contact form.**

To Follow this tutorial you need to familiar with ReactJS a Javascript Lirbary to build UI and we will need [EmailJS ]('https://www.emailjs.com/') account if you are not familiear with EmailJS then no problem we will also learn about Emailjs.

- Step: 01

  Create a simple React Application so we will use create-react-app to create a react application.

  `npx create-react-app email-client`

- Step: 02

  Create a simple form to get data from user. I am using Bootstrap CDN to create contact form.

  Create 4 Text Fields FirstName ,LastName , Adress and Message. Copy this code in your App.js file.

  ```js
  import React, { useRef } from "react";
  import emailjs, { init } from "@emailjs/browser";
  function App() {
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
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
            </div>
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
  ```

- Step: 03

  After saving this file run your dev server by running

  ` npm start`

  Now we have created our form component. Now Create EmailJS account , create email template and get USERID , TEMPLATEID and USERID.

  _Goto https://www.emailjs.com_ and register your account. After registration goto Email Templates
  from navigation menu and create Email Template and update it according your requirements. We are sending FristName , LastName , Address and user_message from contact form. We will use these variables in our template using doule curly braces like this {{firstname}}. See ScreenShot =>

  Now get Email template ID from Email Templates option:

  Get Service ID from Email Serive option :

  Get UserID and User ID which we will use with init method of emailjs.
  Now update our code in _./App.js_

  import emailjs and { init } at top of component and create a ref to our form. Using ref we will access data of text fields.
  and update onSubmit method of form to send Email like this :

```js
import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";

function App() {
  init("user_xxxxxxxxxxxxxxxxxxx");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("SERVICE_D", "TEMPLAE_ID", form.current, "USER_ID").then(
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
```

Now Start your application and Try submiting from. You will recieve an email that we defined email template.

Congratulations ! Now You Can Recive Emails when a user submit A Contact Form.

You can find Complete code of this tutorial at Github [Email-Sending-Tutorial](https://github.com/abdulwaqar844)

[TWITTER](https://www.twitter.com/abdulwaqar844)

[Facebook](https://www.facebook.com/modernappdev)
