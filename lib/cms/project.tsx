import "server-only";
import {fetchGraphQL, preview} from "@/lib/cms";

/**
 * Get home page data from CMS
 */
export const getProjectsPage = async () => {
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
  return entry?.data?.projectsPageCollection?.items?.[0];
};
