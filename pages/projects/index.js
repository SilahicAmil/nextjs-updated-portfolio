import Head from "next/head";
import ProjectCard from "../../components/ProjectsPage/ProjectCard";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Scholar",
    description:
      "A site similiar to Canvas. Which is mainly used for teachers/educators to upload assignments and give updates about classes.",
    tags: ["Nextjs", "Tailwind", "Supabase", "Typescript"],
    imageName: "scholar-logo-no-bg.png",
  },
  {
    id: 2,
    title: "Giga Sur",
    description:
      "A site similiar to Canvas. Which is mainly used for teachers/educators to upload assignments and give updates about classes.",
    tags: ["Nextjs", "Tailwind", "Supabase"],
    imageName: "scholar-logo-no-bg.png",
  },
  {
    id: 3,
    title: "Rent(X)",
    description:
      "A site similiar to Canvas. Which is mainly used for teachers/educators to upload assignments and give updates about classes.",
    tags: ["React Native", "Tailwind", "MongoDB"],
    imageName: "scholar-logo-no-bg.png",
  },
];

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
        {DUMMY_DATA.map((item) => {
          return (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              tags={item.tags}
              imageName={item.imageName}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectsPage;
