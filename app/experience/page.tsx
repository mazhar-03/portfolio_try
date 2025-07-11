import Link from "next/link";
import { getExperiencePage } from "@/lib/cms/experience";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {ExperienceItem} from "@/lib/types";

export default async function Experience() {
    const experience = await getExperiencePage();
    // console.log("EXPERIENCE DATA", experience);
    return (
      <section className="max-w-3xl min-h-screen mx-auto pt-24 sm:pt-32 px-4 pb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">{experience?.title}</h2>

          <div className="space-y-10">
            {experience?.experiencesCollection?.items?.map((item, index) => {
              const typedItem = item as ExperienceItem;  // Cast here
              return (
                <div key={index}>
                  <h3 className="text-xl font-semibold">{typedItem.roleTitle}</h3>
                  <p className="text-gray-600">
                    {typedItem.companyName ? (
                      typedItem.companyUrl ? (
                        <Link
                          href={typedItem.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {typedItem.companyName}
                        </Link>
                      ) : (
                        <span>{typedItem.companyName}</span>
                      )
                    ) : null}
                    {typedItem.locationAndDate ? ` — ${typedItem.locationAndDate}` : ""}
                  </p>
                  <div className="list-disc list-inside mt-2 text-gray-700 text-sm space-y-2">
                    {documentToReactComponents(typedItem.description.json)}
                  </div>
                </div>
              );
            })}


          </div>
      </section>
    );
}
