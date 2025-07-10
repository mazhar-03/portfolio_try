import { cache } from "react";
import "server-only";
import { fetchGraphQL, preview } from "@/lib/cms";

/**
 * Get home page data from CMS
 */
export const getContactPage = cache(async () => {
  const entry = await fetchGraphQL(
    `query {
            contactCollection(
                preview: ${preview ? "true" : "false"},
                limit: 1
            ) {
                items {
                    title,
                    text,
                    buttonText,
                    buttonUrl
                }
            }
        }`,
    { tags: [`contact`] }
  );
  return entry?.data?.contactCollection?.items?.[0];
});
