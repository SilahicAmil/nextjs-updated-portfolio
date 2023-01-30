import Image from "next/image";
import ProjectTags from "./ProjectTags";

const ProjectCard = ({ imageName, title, description, tags }) => {
  console.log(tags);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src={`/images/${imageName}`}
        alt="scholar logo"
        width={1000}
        height={1000}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-400 text-base">{description}</p>
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
