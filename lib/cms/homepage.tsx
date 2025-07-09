import { cache } from "react";
import "server-only";
import { fetchGraphQL, preview } from "@/lib/cms";

/**
 * Get home page data from CMS
 */
export const getHomePage = cache(async () => {
    const entry = await fetchGraphQL(
        `query {
            homeCollection(
                preview: ${preview ? "true" : "false"},
                limit: 1
            ) {
                items {
                    profilePicture{
                        url
                        width
                        height
                    },
                    introText,
                    nameSurname,
                    jobTitle,
                    button1Text,
                    button1Url,
                    button2Text,
                    button2Url
                }
            }
        }`,
        { tags: [`home-page`] }
    );

    return entry?.data?.homeCollection?.items?.[0];
});
