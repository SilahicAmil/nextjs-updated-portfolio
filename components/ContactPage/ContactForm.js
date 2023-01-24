const ContactForm = ({}) => {
  return (
    <div className="w-1/2 m-8">
      <h3 className="lg:text-2xl md:text-xl sm:text-lg xsm:text-md ">
        Or contact me directly!
      </h3>

      <form>
        <div className="flex flex-col gap-6 mt-4">
          <div className="lg:flex  w-4/12 gap-4">
            <div className="lg:flex gap-2">
              <label htmlFor="Name">Name</label>
              <input type="text" id="Name" />
            </div>
            <div className="lg:flex gap-2  ">
              <label htmlFor="Email">Email</label>
              <input type="text" id="Email" />
            </div>
          </div>
        </div>

        <div className="lg:flex flex-col w-8/12 mt-4">
          <label htmlFor="Subject">Subject</label>
          <input type="text" id="Subject" />
        </div>
        <div className="lg:flex flex-col w-8/12 mt-4">
          <label htmlFor="Message">Message</label>
          <textarea id="Message" cols="30" rows="5"></textarea>
        </div>
        <div className="flex justify-center items-center mt-4 border-2 border-lime-200 w-24 h-8">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
