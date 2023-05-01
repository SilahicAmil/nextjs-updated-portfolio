import Image from "next/image";
import Link from "next/link";
import ProjectTags from "./ProjectTags";

const ProjectCard = ({
  imageName,
  title,
  githubLink,
  description,
  tags,
  siteLink,
}) => {
  return (
    <div className="flex h-full w-11/12 flex-col overflow-auto rounded shadow-lg shadow-slate-900">
      <Image
        className="h-64 w-full object-cover"
        src={`/images/${imageName}`}
        alt={title}
        width={1000}
        height={1000}
      />
      <div className="px-6 py-4">
        <div className="mb-2 flex flex-col gap-2 text-xl font-bold underline ">
          <Link href={siteLink} target="_blank">
            Live Demo: {title}
          </Link>
          <div className="">
            <Link href={githubLink} target="_blank" className="ml-auto ">
              Github
            </Link>
          </div>
        </div>
        <p className="text-sm text-gray-400 ">{description}</p>
      </div>
      <div className="mb-2 px-4 pt-2">
        {tags.map((tag) => {
          return <ProjectTags key={tag.id}>{tag}</ProjectTags>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
