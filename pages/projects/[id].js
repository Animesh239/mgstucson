import { useRouter } from "next/router";
import { projects } from "@/assets/data/dummydata";
import { Project } from "@/components/common/Project";
import Head from "next/head";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <section className="project-details bg-top">
        <div className="container">
          <Project data={project} show={true} />
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
