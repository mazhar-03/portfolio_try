import "server-only";
import { fetchGraphQL, preview } from "@/lib/cms";

/**
 * Get projects page data from CMS
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
    // { tags: ['projects-page'] }
  ) as {
    data?: {
      projectsPageCollection?: {
        items?: Array<{
          title: string;
          projectsCollection?: {
            items?: Array<{
              title: string;
              description: string;
              tech: string;
              github: string;
              imagesCollection?: {
                items?: Array<{
                  url: string;
                  width: number;
                  height: number;
                }>;
              };
            }>;
          };
        }>;
      };
    };
  };

  return entry?.data?.projectsPageCollection?.items?.[0];
};
