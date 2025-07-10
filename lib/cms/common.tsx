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
                        ... on Socials{
                          title
                          link
                        }
                        
                      }
                  },
                  nameSurname,
                  footerCopyRight
                  navItemsCollection {
                    items {
                      text,
                      url
                    }
                  }
                }
            }
        }`,
    { tags: [`common`] }
  );

  console.log(entry)
  
  return entry?.data?.commonCollection?.items?.[0];

  

  // const navItems = [
  //   { label: raw?.navItem1, url: raw?.navItem1Url },
  //   { label: raw?.navItem2, url: raw?.navItem2Url },
  //   { label: raw?.navItem3, url: raw?.navItem3Url },
  //   { label: raw?.navItem4, url: raw?.navItem4Url },
  // ].filter(item => item?.label && item?.url);

  // return {
  //   nameSurname: raw?.nameSurname,
  //   footerCopyRight: raw?.footerCopyRight,
  //   navItems,
  //   socialMedia: raw.socialMediaCollection?.items || [],
  // };

});