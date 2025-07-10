import {cache} from "react";
import "server-only";
import {fetchGraphQL, preview} from "@/lib/cms";

/**
 * Get home page data from CMS
 */
export const getProjectsPage = cache(async () => {
  const entry = await fetchGraphQL(
    `query {
      projectsPageCollection(
        limit: 1,
        preview: ${preview ? "true" : "false"}
      ) {
        items {
          title
          projectsCollection {
            items {
              title
              description
              tech
              github
              imagesCollection {
                items {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }`,
    { tags: ["projects-page"] }
  );

  console.log("RAW ENTRY", JSON.stringify(entry, null, 2));
  return entry?.data?.projectsPageCollection?.items?.[0];
});
