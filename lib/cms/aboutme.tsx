import { cache } from "react";
import "server-only";
import { fetchGraphQL, preview } from "@/lib/cms";

/**
 * Get home page data from CMS
 */
export const getAboutMePage = cache(async () => {
  const entry = await fetchGraphQL(
    `query {
            aboutMeCollection(
                preview: ${preview ? "true" : "false"},
                limit: 1
            ) {
                items {
                    title,
                    description {
                      json
                    }
                }
            }
        }`,
    { tags: [`aboutme`] }
  );
  return entry?.data?.aboutMeCollection?.items?.[0];
});
