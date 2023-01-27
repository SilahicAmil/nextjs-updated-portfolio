import Image from "next/image";
import ProjectTags from "./ProjectTags";

const ProjectCard = ({}) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <Image
        class="w-full"
        src="/images/scholar-logo-no-bg.png"
        alt="scholar logo"
        width={100}
        height={100}
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Scholar</div>
        <p class="text-gray-400 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <ProjectTags>#react</ProjectTags>
        <ProjectTags>#react</ProjectTags>
        <ProjectTags>#react</ProjectTags>
        <ProjectTags>#react</ProjectTags>
        <ProjectTags>#react</ProjectTags>
        <ProjectTags>#react</ProjectTags>
        <ProjectTags>#react</ProjectTags>
      </div>
    </div>
  );
};

export default ProjectCard;
