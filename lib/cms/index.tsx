// Preview flag
export const preview = process.env.SITE_ENV !== "production";

/**
 *
 * @param query GraphQL query
 * @param next Next options
 * @returns
 */
export async function fetchGraphQL(
  query: string,
  next = {},
  variables: Record<string, unknown> = {},
): Promise<unknown> {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
        next: {
          revalidate: preview ? 0 : 60,
          ...next,
        },
      },
    )

    return response.json();
  } catch (error) {
    console.error(error);
  }

  return null;
}
