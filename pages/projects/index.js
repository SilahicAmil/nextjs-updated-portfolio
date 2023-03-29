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
      <div className="grid gap-2 xsm:grid-cols-1 xsm:p-1 sm:grid-cols-2 tablet:grid-cols-2 md:w-full md:grid-cols-2  md:p-2  lg:grid-cols-4 lg:p-8">
        {PROJECT_DATA.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageName={project.imageName}
              siteLink={project.siteLink}
              githubLink={project.github}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectsPage;
