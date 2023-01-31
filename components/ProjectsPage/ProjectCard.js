import Image from "next/image";
import ProjectTags from "./ProjectTags";

const ProjectCard = ({ imageName, title, description, tags }) => {
  console.log(tags);

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg shadow-slate-900 ">
      <Image
        className="w-full"
        src={`/images/${imageName}`}
        alt="scholar logo"
        width={1000}
        height={1000}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-sm text-gray-400 ">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => {
          return <ProjectTags key={tag.id}>{tag}</ProjectTags>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
