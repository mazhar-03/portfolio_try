import "server-only";
import { fetchGraphQL, preview } from "@/lib/cms";

/**
 * Get home page data from CMS
 */
export const getAboutMePage = async () => {
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
    // { tags: [`about-me`] }
  );

  return entry?.data?.aboutMeCollection?.items?.[0];
};
