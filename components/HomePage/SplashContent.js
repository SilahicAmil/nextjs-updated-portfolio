const SplashContent = ({}) => {
  return (
    <>
      <div className="flex flex-col h-[90vh] w-full">
        <div className="flex flex-col m-auto w-10/12 ">
          {/* <div className="absolute text-8xl flex flex-col opacity-50 font-bold gap-12 z-1 text-slate-700 w-4/12">
          <h1>I BUILD</h1>
          <h1>COOL THINGS</h1>
        </div> */}

          <div className="">
            <h1 className="text-6xl  mb-3">Amil Silahic</h1>

            <p className="text-3xl">Full Stack Web Developer</p>
            <div className="flex gap-8 p-2">
              <button className=" p-1 w-24 h-12">View Work</button>
              <button className="  p-1 w-24 h-12">About</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashContent;
