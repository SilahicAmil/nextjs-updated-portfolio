const ContactPage = ({}) => {
  return (
    <>
      <div className="flex flex-1 justify-center w-full h-[90vh] font-bold">
        <div className="border-r-2 w-1/2">
          <h2 className="text-2xl m-8">Check out my Socials!</h2>
          <div className="m-8 text-lg">
            <p className="text-2xl ">
              <span className="text-orange-200">.socials </span>&#123;
            </p>

            <p className="px-4 flex gap-2">
              email:
              <a href="mailto:amil@amil.dev" target="_blank" rel="noreferrer">
                amil@amil.dev
              </a>
            </p>
            <p className="px-4 flex gap-2">
              github:
              <a
                href="https://github.com/silahicamil"
                target="_blank"
                rel="noreferrer"
              >
                silahicamil
              </a>
            </p>
            <p className="px-4 flex gap-2">
              linkedin:
              <a
                href="https://www.linkedin.com/in/amil-silahic-4b5a01140/"
                target="_blank"
                rel="noreferrer"
              >
                amilsilahic
              </a>
            </p>
            <p>
              <span>&#125;</span>
            </p>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default ContactPage;
