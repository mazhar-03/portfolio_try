import "server-only";
import { fetchGraphQL, preview } from "@/lib/cms";

/**
 * Get experience page data from CMS
 */
export const getExperiencePage = async () => {
  const entry = await fetchGraphQL(
    `query {
      experienceCollection(
        preview: ${preview ? "true" : "false"},
        limit: 1
      ) {
        items {
          title
          experiencesCollection {
            items {
                roleTitle
                companyName
                companyUrl
                locationAndDate
                description {
                  json
                }
              
            }
          }
        }
      }
    }`,
    { tags: [`experience`] }
  );
  return entry?.data?.experienceCollection?.items?.[0];
};
