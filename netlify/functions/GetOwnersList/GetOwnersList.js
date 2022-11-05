require("dotenv").config();
require("dotenv-flow").config();
const client = require("@mailchimp/mailchimp_marketing");

const apiKey = process.env.MAILCHIMP_API_KEY;
const server = process.env.MAILCHIMP_SERVER;
const ownersListId = process.env.MAILCHIMP_OWNERS_LIST_ID;

client.setConfig({
  apiKey: apiKey,
  server: server,
});

async function getOwners() {
  const response = await client.lists.getListMembersInfo(ownersListId, {
    count: 1000,
    fields: [
      "members.id",
      "members.email_address",
      "members.full_name",
      "members.merge_fields",
    ],
    // offset: 200
  });
  // console.log(response.members.slice(-1)[0] );
  console.log(response.members);
  return response;
}

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const owners = await getOwners();
    return {
      statusCode: 200,
      body: JSON.stringify(owners),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
