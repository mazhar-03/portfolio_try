import { cache } from "react";
import "server-only";
import { fetchGraphQL, preview } from "@/lib/cms";

/**
 * Get home page data from CMS
 */
export const getCommon = cache(async () => {
    const entry = await fetchGraphQL(
        `query {
            commonCollection(
                preview: ${preview ? "true" : "false"},
                limit: 1
            ) {
                items {
                    SocialMediaCollection{
                        title,
                        link
                    }
                }
            }
        }`,
        { tags: [`common`] }
    );

    return entry?.data?.commonCollection?.items?.[0];
});
