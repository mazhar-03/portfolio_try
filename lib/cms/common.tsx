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
                    socialMediaCollection{
                        items {
                          title
                          link
                        }
                    },
                    nameSurname,
                    navItem1,
                    navItem1Url,
                    navItem2,
                    navItem2Url,
                    navItem3,
                    navItem3Url,
                    navItem4,
                    navItem4Url,
                    footerCopyRight
                }
            }
        }`,
    { tags: [`common`] }
  );

  return entry?.data?.commonCollection?.items?.[0];
});