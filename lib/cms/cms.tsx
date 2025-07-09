import * as contentful from 'contentful'

const contentfulOptions = {
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE || 'space',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'token',
}

const client = contentful.createClient(contentfulOptions)

export const getEntries = async (options) =>

  let entries = []

if (!entries) {
  entries = await client.getEntries(options)
}

if (entries && entries.items) {
  return [...entries.items.map(item => {
    return {
      sysId: item.sys.id,
      ...item.fields,
    }
  })]
}

return []
}