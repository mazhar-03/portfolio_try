"use client"

import Image from "next/image";
import Link from "next/link"
import { Project } from "@/lib/types"
import { ProjectImage } from "@/lib/types"
import { useState } from "react";

export default function ProjectCard({
    project 
}: {
    project: Project
}) {

    const [modalImage, setModalImage] = useState<string | null>(null);
    
    //explicitly type image as string
    const openModal = (image: string) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    console.log(project)

    const techArray = project.tech.split(",");

    return (
        <div>
            {project.imagesCollection.items.length === 1 ? (
                <div
                    className="relative h-64 w-full cursor-pointer"
                    onClick={() => openModal(project.imagesCollection.items[0].url)}
                >
                    <Image
                        src={project.imagesCollection.items[0].url}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-xl"
                        priority
                    />
                </div>
            ) : (
                <div className="flex overflow-x-auto space-x-4 p-4">
                    {project.imagesCollection.items.map((item: ProjectImage, i: number) => {
                        console.log(item)
                        return(
                            <div
                                key={i}
                                className="relative w-40 h-28 flex-shrink-0 rounded-md overflow-hidden cursor-pointer"
                                onClick={() => openModal(item.url)}
                            >
                                <Image
                                    src={item.url}
                                    alt={`${project.title} image ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )
                    })}
                </div>
            )}

            <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-white">
                    {techArray.map((t:string, i:number) => (
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
        </div>
    );
}