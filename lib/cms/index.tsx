// Preview flag
export const preview = process.env.SITE_ENV !== "production";

/**
 * Fetches data from the Contentful GraphQL API.
 *
 * @param query - GraphQL query string
 * @param next - Optional Next.js fetch options
 * @param variables - Optional GraphQL variables
 * @returns - The GraphQL response typed as generic T, or null on failure
 */
export async function fetchGraphQL<T = unknown>(
  query: string,
  next: RequestInit = {},
  variables: Record<string, unknown> = {},
): Promise<T | null> {
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
    );

    const json = await response.json();
    return json as T;
  } catch (error) {
    console.error("GraphQL Fetch Error:", error);
    return null;
  }
}
