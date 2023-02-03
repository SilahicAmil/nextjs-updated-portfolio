import Image from "next/image";
import Link from "next/link";
import ProjectTags from "./ProjectTags";

const ProjectCard = ({ imageName, title, description, tags, siteLink }) => {
  console.log(tags);

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg shadow-slate-900 ">
      <Image
        className="h-1/2 w-full"
        src={`/images/${imageName}`}
        alt={title}
        width={500}
        height={500}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold underline">
          <Link href={siteLink} target="_blank">
            {title}
          </Link>
        </div>
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
