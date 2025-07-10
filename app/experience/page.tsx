import Link from "next/link";
import { getExperiencePage } from "@/lib/cms/experience";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {ExperienceItem} from "@/lib/types";

export default async function Experience() {
    const experience = await getExperiencePage();
    // console.log("EXPERIENCE DATA", experience);
    return (
      <section className="max-w-3xl h-auto mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{experience.title}</h2>

          <div className="space-y-10">
            {experience.experiencesCollection.items.map((item: ExperienceItem, index: number) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{item.roleTitle}</h3>
                <p className="text-gray-600">
                  {item.companyName ? (
                    item.companyUrl ? (
                      <Link
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {item.companyName}
                      </Link>
                    ) : (
                      <span>{item.companyName}</span>
                    )
                  ) : null}
                  {item.locationAndDate ? ` — ${item.locationAndDate}` : ""}
                </p>
                <div className="list-disc list-inside mt-2 text-gray-700 text-sm space-y-2">
                  {documentToReactComponents(item.description.json)}
                </div>
              </div>
            ))}

          </div>
      </section>
    );
}
