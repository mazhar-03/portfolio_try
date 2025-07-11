import { getProjectsPage } from "@/lib/cms/project"
import ProjectCard from "@/components/ProjectCard"
import { Project } from "@/lib/types"

export default async function Projects() {

  const projects = await getProjectsPage();
  // console.log(projects)

  return (
    <section className="max-w-6xl container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">{projects?.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects?.projectsCollection?.items?.map((project:Project, index:number) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
