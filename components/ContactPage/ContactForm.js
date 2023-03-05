import toast, { Toaster } from "react-hot-toast";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = ({}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // eventually use use effect to only show
  // message sent for like 5 secnds after submit

  const contactFormSubmitHandler = async (e) => {
    e.preventDefault();

    const nameRefValue = nameRef.current.value;
    const emailRefValue = emailRef.current.value;
    const messageRefValue = messageRef.current.value;

    if (
      nameRefValue.trim() === "" ||
      emailRefValue !== "@" ||
      messageRefValue.trim() === ""
    ) {
      return toast.error("Invalid Input(s)");
    }

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
    );

    formRef.current.reset();

    setTimeout(function () {
      return toast.success("Message Sent!");
    }, 4000);

    return toast.success("Sending Message");
  };

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 4000,
        }}
      />
      <div className="m-8 w-1/2">
        <h3 className="xsm:text-md sm:text-lg md:text-xl lg:text-2xl ">
          Or contact me directly!
        </h3>

        <form onSubmit={contactFormSubmitHandler} ref={formRef}>
          <div className="mt-4 flex flex-col gap-6">
            <div className="w-4/12  gap-4 lg:flex">
              <div className="gap-2 lg:flex-col">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  ref={nameRef}
                />
              </div>
              <div className="gap-2 lg:flex-col  ">
                <label htmlFor="Email">Email</label>
                <input type="text" id="Email" name="reply_to" ref={emailRef} />
              </div>
            </div>
          </div>

          <div className="mt-4 w-8/12 flex-col lg:flex">
            <label htmlFor="Message">Message</label>
            <textarea
              id="Message"
              cols="30"
              rows="5"
              name="message"
              ref={messageRef}
            />
          </div>
          <div className="mt-4 flex h-8 w-24 items-center justify-center border-2 border-lime-200">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
