import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const ContactForm = ({}) => {
  const formRef = useRef();

  const [submittedForm, setSubmittedForm] = useState(false);

  const contactFormSubmitHandler = async (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_4hpeoas",
      "template_4jmafdm",
      formRef.current,
      "SCNS9M5weTyzUQKKH"
    );
    setSubmittedForm(true);
    formRef.current.reset();
  };

  return (
    <div className="w-1/2 m-8">
      <h3 className="lg:text-2xl md:text-xl sm:text-lg xsm:text-md ">
        Or contact me directly!
      </h3>

      <form onSubmit={contactFormSubmitHandler} ref={formRef}>
        <div className="flex flex-col gap-6 mt-4">
          <div className="lg:flex  w-4/12 gap-4">
            <div className="lg:flex-col gap-2">
              <label htmlFor="Name">Name</label>
              <input type="text" id="from_name" name="from_name" />
            </div>
            <div className="lg:flex-col gap-2  ">
              <label htmlFor="Email">Email</label>
              <input type="text" id="Email" name="reply_to" />
            </div>
          </div>
        </div>

        <div className="lg:flex flex-col w-8/12 mt-4">
          <label htmlFor="Message">Message</label>
          <textarea id="Message" cols="30" rows="5" name="message" />
        </div>
        <div className="flex justify-center items-center mt-4 border-2 border-lime-200 w-24 h-8">
          <button type="submit">Submit</button>
        </div>
      </form>

      {submittedForm ? <div>Message Sent!</div> : undefined}
    </div>
  );
};

export default ContactForm;
