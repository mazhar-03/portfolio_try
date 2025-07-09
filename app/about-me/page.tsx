import { getAboutMePage } from "@/lib/cms/aboutme";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";

export default async function AboutMe() {
  const aboutme = await getAboutMePage();
  console.log("ABOUT-ME DATA", aboutme);

  if (!aboutme) return null;

  return (
    <section className="max-w-3xl mx-auto h-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">{aboutme.title}</h2>

      <div className="text-lg text-gray-700 text-left space-y-4">
        {documentToReactComponents(aboutme.description.json, {
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
