import { getProjectsPage } from "@/lib/cms/project"
import ProjectCard from "@/components/ProjectCard"
import { Project } from "@/lib/types"

// const projects: Project[] = [
//   {
//     title: "Appointment System",
//     description:
//       "This is an appointment and booking management app inspired by Booksy. " +
//       "I built the backend with Java and Spring Boot, and used Thymeleaf for the frontend pages. " +
//       "It stores data with an H2 database and shows charts using Chart.js. " +
//       "Users can make, edit, and cancel appointments. " +
//       "This project demonstrates my skills in both backend and frontend development.",
//     images: [
//       "/static/image/booksy_1.png",
//       "/static/image/booksy_2.png",
//       "/static/image/booksy_3.png",
//       "/static/image/booksy_4.png",
//     ],
//     tech: ["Java", "Spring Boot", "API", "Thymeleaf", "H2 Database", "HTML", "CSS", "Chart.js"],
//     github: "https://github.com/mazhar-03/BooksyTRDemo",
//   },
//   {
//     title: "Language Detection with Single-Layer Neural Network",
//     description:
//       "Java-based machine learning project that classifies text into English, Turkish, or Polish using a custom-built single-layer perceptron neural network. " +
//       "It vectorizes text into letter frequency features, trains one perceptron per language class, and evaluates model performance using accuracy, precision, recall, and F1-score metrics.",
//     images: [
//       "/static/image/proje4.1.png",
//       "/static/image/proje4.2.png",
//       "/static/image/proje4.3.png"
//     ],
//     tech: ["Java", "Machine Learning", "Neural Networks", "Text Processing", "Evaluation Metrics"],
//     github: "https://github.com/mazhar-03/NAI_mpp3",
//   },
//   {
//     title: "Clustering Visualizer",
//     description: "Java-based console app to visualize centroid-based clustering from observations.",
//     images: ["/static/image/proje_1.png"],
//     tech: ["Java", "Python", "Math"],
//     github: "https://github.com/mazhar-03/MPP_05",
//   },
//   {
//     title: "Responsive Website Design",
//     description: "A modern, mobile-friendly website for a game.",
//     images: ["/static/image/proje_2.png", "/static/image/proje_2.2.png"],
//     tech: ["Next.js", "HTML", "Tailwind CSS"],
//     github: "https://github.com/mazhar-03/interview-technical-test",
//   },
//   {
//     title: "Iris Flower Classifier with Perceptron",
//     description: "A Java-based Perceptron classifier that predicts Iris flower species with a GUI for input and visualization.",
//     images: [
//       "/static/image/perceptron_1.png",
//       "/static/image/perceptron_2.png"
//     ],
//     tech: ["Java", "Machine Learning", "Swing GUI", "Data Visualization"],
//     github: "https://github.com/mazhar-03/mpp2"
//   }

// ];

export default async function Projects() {
  

  const projects = await getProjectsPage();
  console.log(projects)


  return (
    <section className="max-w-6xl container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.projectsCollection.items.map((project:Project, index:number) => (
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
