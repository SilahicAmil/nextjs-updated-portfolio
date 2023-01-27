import Head from "next/head";
import ProjectCard from "../../components/ProjectsPage/ProjectCard";

const DUMMY_DATA = [{}];

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Amil Silahic - Projects</title>
        <meta
          property="og:title"
          content="Portfolio website for Amil Silahic. Front End Developer/Engineer. Salt Lake City, Utah. Projects"
          key="title"
        />
      </Head>
      <div className="m-8  gap-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default ProjectsPage;
