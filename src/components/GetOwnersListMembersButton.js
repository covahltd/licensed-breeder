require('dotenv').config();
require('dotenv-flow').config();
const client = require("@mailchimp/mailchimp_marketing");

const apiKey = process.env.MAILCHIMP_API_KEY;
const server = process.env.MAILCHIMP_SERVER;
const ownersListId = process.env.MAILCHIMP_OWNERS_LIST_ID;

console.log(apiKey);
console.log(server);
console.log(ownersListId);

client.setConfig({
  apiKey: apiKey,
  server: server,
});

async function run() {
    const response = await client.lists.getListMembersInfo(ownersListId,{
      count: 1000,
      fields: ["members.id", "members.email_address", "members.full_name"],
      // offset: 200
    }
    );
    // console.log(response.members.slice(-1)[0] );
    console.log(response);
  };

run();
