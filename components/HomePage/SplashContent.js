import Image from "next/image";
import Link from "next/link";

const SplashContent = ({}) => {
  return (
    <>
      <div className="flex h-[90vh] w-full flex-1 flex-col font-JetMono">
        <div className="m-auto flex flex-col lg:w-7/12">
          <div className="ml-auto flex w-6/12  xsm:invisible sm:invisible md:invisible lg:visible">
            <Image
              alt="headshot photo"
              src="/images/updated-profile.png"
              width={250}
              height={250}
              className="rounded-full"
              layout="repsonsive"
            />
          </div>
          <h1 className="mb-3  text-6xl ">Amil Silahic</h1>

          <p className="ml-4 text-2xl ">Full Stack Web Developer</p>
          <div className="flex gap-8 xsm:p-2 sm:p-4 md:p-6 lg:p-8">
            <Link href="/projects" className="flex items-center bg-red-500">
              <button className=" flex h-12 w-32 items-center justify-center">
                View Work
              </button>
            </Link>
            <Link href="/contact" className="border-2 border-lime-200">
              <button className=" flex h-12 w-32 items-center justify-center p-1">
                Contact
              </button>
            </Link>
          </div>
          {/* not sure if I want to keep visibility on all or just lg/md */}
          <div className="w-42  ml-28 mr-auto flex items-center justify-center bg-green-300 p-2 text-black ">
            <Link href="/UPDATED-RESUME.pdf" download target="_blank">
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashContent;
