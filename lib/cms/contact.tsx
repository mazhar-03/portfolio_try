import "server-only";
import { fetchGraphQL, preview } from "@/lib/cms";

/**
 * Get contact page data from CMS
 */
export const getContactPage = async () => {
  const entry = await fetchGraphQL(
    `query {
      contactCollection(
        preview: ${preview ? "true" : "false"},
        limit: 1
      ) {
        items {
          title
          text
          buttonText
          buttonUrl
        }
      }
    }`,
    // { tags: ['contact'] }
  ) as {
    data?: {
      contactCollection?: {
        items?: Array<{
          title: string;
          text: string;
          buttonText: string;
          buttonUrl: string;
        }>;
      };
    };
  };

  return entry?.data?.contactCollection?.items?.[0];
};
