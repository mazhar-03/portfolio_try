"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Appointment System",
    description:
      "This is an appointment and booking management app inspired by Booksy. " +
      "I built the backend with Java and Spring Boot, and used Thymeleaf for the frontend pages. " +
      "It stores data with an H2 database and shows charts using Chart.js. " +
      "Users can make, edit, and cancel appointments. " +
      "This project demonstrates my skills in both backend and frontend development.",
    images: [
      "/static/image/booksy_1.png",
      "/static/image/booksy_2.png",
      "/static/image/booksy_3.png",
      "/static/image/booksy_4.png",
    ],
    tech: ["Java", "Spring Boot", "API", "Thymeleaf", "H2 Database", "HTML", "CSS", "Chart.js"],
    github: "https://github.com/mazhar-03/BooksyTRDemo",
  },
  {
    title: "Language Detection with Single-Layer Neural Network",
    description:
      "Java-based machine learning project that classifies text into English, Turkish, or Polish using a custom-built single-layer perceptron neural network. " +
      "It vectorizes text into letter frequency features, trains one perceptron per language class, and evaluates model performance using accuracy, precision, recall, and F1-score metrics.",
    images: [
      "/static/image/proje4.1.png",
      "/static/image/proje4.2.png",
      "/static/image/proje4.3.png"
    ],
    tech: ["Java", "Machine Learning", "Neural Networks", "Text Processing", "Evaluation Metrics"],
    github: "https://github.com/mazhar-03/NAI_mpp3",
  },
  {
    title: "Clustering Visualizer",
    description: "Java-based console app to visualize centroid-based clustering from observations.",
    images: ["/static/image/proje_1.png"],
    tech: ["Java", "Python", "Math"],
    github: "https://github.com/mazhar-03/MPP_05",
  },
  {
    title: "Responsive Website Design",
    description: "A modern, mobile-friendly website for a game.",
    images: ["/static/image/proje_2.png", "/static/image/proje_2.2.png"],
    tech: ["Next.js", "HTML", "Tailwind CSS"],
    github: "https://github.com/mazhar-03/interview-technical-test",
  },
  {
    title: "Iris Flower Classifier with Perceptron",
    description: "A Java-based Perceptron classifier that predicts Iris flower species with a GUI for input and visualization.",
    images: [
      "/static/image/perceptron_1.png",
      "/static/image/perceptron_2.png"
    ],
    tech: ["Java", "Machine Learning", "Swing GUI", "Data Visualization"],
    github: "https://github.com/mazhar-03/NAI_mpp2"
  }

];

export default function Projects() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="max-w-6xl container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
          >
            {project.images.length === 1 ? (
              <div
                className="relative h-64 w-full cursor-pointer"
                onClick={() => openModal(project.images[0])}
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-xl"
                  priority
                />
              </div>
            ) : (

              <div className="flex overflow-x-auto space-x-4 p-4">
                {project.images.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-40 h-28 flex-shrink-0 rounded-md overflow-hidden cursor-pointer"
                    onClick={() => openModal(src)}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-700 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-white">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-gray-800 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={project.github}
                className="inline-block mt-3 text-blue-600 hover:underline text-sm"
                target="_blank"
              >
                View on GitHub →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-pointer"
        >
          <div className="relative w-11/12 max-w-4xl h-[80vh]">
            <Image
              src={modalImage}
              alt="Expanded project image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
