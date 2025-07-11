import "server-only";
import { fetchGraphQL, preview } from "@/lib/cms";

/**
 * Get common layout data from CMS
 */
export const getCommon = async () => {
  const entry = await fetchGraphQL(
    `query {
      commonCollection(
        preview: ${preview ? "true" : "false"},
        limit: 1
      ) {
        items {
          socialMediaCollection {
            items {
              ... on Socials {
                title
                link
              }
            }
          }
          navItemsCollection {
            items {
              text
              url
            }
          }
          nameSurname
          footerCopyRight
        }
      }
    }`,
    // { tags: ['common'] }
  ) as {
    data?: {
      commonCollection?: {
        items?: Array<{
          socialMediaCollection?: {
            items?: Array<{
              title: string;
              link: string;
            }>;
          };
          navItemsCollection?: {
            items?: Array<{
              text: string;
              url: string;
            }>;
          };
          nameSurname: string;
          footerCopyRight: string;
        }>;
      };
    };
  };

  return entry?.data?.commonCollection?.items?.[0];
};
