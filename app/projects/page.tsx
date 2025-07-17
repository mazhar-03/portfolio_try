import { getProjectsPage } from "@/lib/cms/project";
import AnimatedGrid from "@/components/AnimatedGrid";

export default async function Projects() {
  const projects = await getProjectsPage();

  if (!projects) return <p>No projects found.</p>;

  return (
    <section className="max-w-6xl container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">{projects.title}</h2>

      <AnimatedGrid projects={projects.projectsCollection?.items ?? []} />
    </section>
  );
}
