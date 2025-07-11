import { getAboutMePage } from "@/lib/cms/aboutme";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, Document } from "@contentful/rich-text-types";

export default async function AboutMe() {
  const aboutme = await getAboutMePage();
  if (!aboutme) return null;

  return (
    <section className="max-w-3xl mx-auto min-h-screen flex flex-col pt-24 sm:pt-32 pb-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">{aboutme.title}</h2>

      <div className="text-lg text-gray-700 text-left space-y-4">
        {documentToReactComponents(aboutme.description.json as Document, {
          renderNode: {
            [INLINES.HYPERLINK]: (node, children) => {
              const uri = node.data.uri;
              return (
                <a
                  href={uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {children}
                </a>
              );
            },
          },
        })}
      </div>
    </section>
  );
}
