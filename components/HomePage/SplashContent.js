import Image from "next/image";
import Link from "next/link";

const SplashContent = ({}) => {
  return (
    <>
      <div className="flex flex-col flex-1 h-[90vh] w-full">
        <div className="flex flex-col m-auto w-1/2">
          <div className="flex ml-auto w-6/12  lg:visible md:invisible sm:invisible xsm:invisible">
            <Image
              alt="headshot photo"
              src="/images/updated-profile.png"
              width={250}
              height={250}
              className="rounded-full"
              layout="repsonsive"
            />
          </div>
          <h1 className="text-6xl  mb-3">Amil Silahic</h1>

          <p className="text-3xl">Full Stack Web Developer</p>
          <div className="flex gap-8 lg:p-8 md:p-6 sm:p-4 xsm:p-2">
            <Link href="/projects" className="bg-red-500">
              <button className="p-1 w-24 h-12">View Work</button>
            </Link>
            <Link href="/contact" className="border-lime-200 border-2">
              <button className=" p-1 w-24 h-12">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashContent;
