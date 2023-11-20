import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Column from "@/components/common/Column";
import Row from "@/components/common/Row";
import FilledButton from "./FilledButton";

const ProjectItem = ({ project }) => {
  const onHandlePublication = () => {
    window.open(project.publication, "_blank");
  };

  const backgroundImageStyle = {
    backgroundImage: `url('${project.image}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px", // Adjust as needed
    width: "100%",
    filter: "brightness(70%)",
  };

  return (
    <Column
      style={backgroundImageStyle}
      classes="w-full p-4 bg-[var(--textColor10)] rounded-[var(--borderRadius)] items-center justify-between text-center"
    >
      <div className="w-full items-center justify-center">
        <h4 className="font-bold text-3xl mt-4">{project.title}</h4>
      </div>

      {/* <div className="w-full items-center justify-center">
        <Image
          width={400}
          height={400}
          className="w-full items-center justify-center rounded"
          src={project.image}
          alt={project.title}
        />
      </div> */}

      <div className="w-full mt-8 items-center">
        <p className="text-center">
          {project.description}
          <span>
            {project.article && (
              <Link className="text-blue-400" target="_blank" href={project.article}>
                {project.articlePart}
              </Link>
            )}
          </span>
        </p>

        <Row classes="w-full items-center justify-center flex-wrap">
          {project.publication && (
            <FilledButton
              label="View Publication"
              onClick={onHandlePublication}
              className="mt-8 min-w-[10rem]"
            />
          )}
        </Row>
      </div>
    </Column>
  );
};

export default ProjectItem;
