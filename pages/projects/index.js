import Head from "next/head";
import { PROJECT_DATA } from "../../data/projectData";
import ProjectCard from "../../components/ProjectsPage/ProjectCard";

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
      <div className="grid gap-4 xsm:grid-cols-1 xsm:p-1 sm:grid-cols-2 tablet:grid-cols-2 md:w-full md:grid-cols-2  md:p-2  lg:grid-cols-4 lg:p-8">
        {PROJECT_DATA.map((item) => {
          return (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              tags={item.tags}
              imageName={item.imageName}
              siteLink={item.siteLink}
              githubLink={item.github}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectsPage;
