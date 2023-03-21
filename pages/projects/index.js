import Head from "next/head";
import ProjectCard from "../../components/ProjectsPage/ProjectCard";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Scholar",
    description:
      "A site similiar to Canvas. Which is mainly used for teachers/educators to upload assignments and give updates about classes.",
    tags: ["Nextjs", "React", "Tailwind", "MongoDB", "Supabase", "DaisyUI"],
    imageName: "scholar-logo-no-bg.png",
    siteLink: "https://nextjs-canvas-classroom.vercel.app/",
  },
  {
    id: 2,
    title: "Giga Sur",
    description:
      "A site that replicates the Mac OS desktop layout. Blend of Big Sur and Ventura OS. Combination of best of both worlds. Currently works best on Desktop/Laptop and Tablet.",
    tags: ["React", "Vite", "Tailwind", "React Draggable"],
    imageName: "giga-sur.png",
    siteLink: "https://giga-sur.vercel.app/",
  },
  {
    id: 3,
    title: "Read(a)Book",
    description:
      "A free mobile app to listen to audiobooks. API Data is from LibriVox, a place where volunteers read books for others to listen too.",
    tags: [
      "React Native",
      "React Navigation",
      "React Native Elements",
      "Expo AV",
      "Supabase",
    ],
    imageName: "read-a-book-color.png",
    siteLink: "https://github.com/SilahicAmil/Read-a-Book",
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
      <div className="m-8 grid gap-4 xsm:grid-cols-1 sm:grid-cols-2 tablet:grid-cols-2 md:w-full md:grid-cols-2  lg:grid-cols-4">
        {DUMMY_DATA.map((item) => {
          return (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              tags={item.tags}
              imageName={item.imageName}
              siteLink={item.siteLink}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectsPage;
