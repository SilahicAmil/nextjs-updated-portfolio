const ContactForm = ({}) => {
  return (
    <div className="w-1/2 m-8">
      <h3 className="text-3xl ">Or contact me directly!</h3>

      <form>
        <div className="flex gap-6 mt-4">
          <div className="flex-col flex">
            <label htmlFor="Name" className="">
              Name
            </label>
            <input type="text" id="Name" />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="Email">Email</label>
            <input type="text" id="Email" />
          </div>
        </div>

        <div className="flex flex-col w-8/12 mt-4">
          <label htmlFor="Subject">Subject</label>
          <input type="text" id="Subject" />
        </div>
        <div className="flex flex-col w-8/12 mt-4">
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
