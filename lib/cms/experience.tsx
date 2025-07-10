import { cache } from "react";
import "server-only";
import { fetchGraphQL, preview } from "@/lib/cms";

/**
 * Get experience page data from CMS
 */
export const getExperiencePage = cache(async () => {
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

  console.log("EXPERIENCE OBJECT: ", entry)
  return entry?.data?.experienceCollection?.items?.[0];
});
