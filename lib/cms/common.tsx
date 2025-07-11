import "server-only";
import { fetchGraphQL, preview } from "@/lib/cms";

/**
 * Get home page data from CMS
 */
export const getCommon = async () => {
  const entry = await fetchGraphQL(
    `query {
            commonCollection(
                preview: ${preview ? "true" : "false"},
                limit: 1
            ) {
                items {
                  socialMediaCollection{
                      items {
                        ... on Socials{
                          title,
                          link
                        }
                        
                      }
                  },
                  navItemsCollection {
                    items {
                      text,
                      url
                    }
                  },
                  nameSurname,
                  footerCopyRight
                }
            }
        }`,
    { tags: [`common`] }
  );

  // console.log(entry)
  return entry?.data?.commonCollection?.items?.[0];
};