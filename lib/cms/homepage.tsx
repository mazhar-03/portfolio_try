import "server-only";
import { fetchGraphQL, preview } from "@/lib/cms";

/**
 * Get home page data from CMS
 */
export const getHomePage = async () => {
    const entry = await fetchGraphQL(
      `query {
      homeCollection(
        preview: ${preview ? "true" : "false"},
        limit: 1
      ) {
        items {
          profilePicture {
            url
            width
            height
          }
          introText
          nameSurname
          jobTitle
          button1Text
          button1Url
          button2Text
          button2Url
        }
      }
    }`,
      // { tags: ['home-page'] }
    ) as {
        data?: {
            homeCollection?: {
                items?: Array<{
                    profilePicture: {
                        url: string;
                        width: number;
                        height: number;
                    };
                    introText: string;
                    nameSurname: string;
                    jobTitle: string;
                    button1Text: string;
                    button1Url: string;
                    button2Text: string;
                    button2Url: string;
                }>;
            };
        };
    };

    return entry?.data?.homeCollection?.items?.[0];
};
