const dotenv = require("dotenv").config();
const client = require("@mailchimp/mailchimp_marketing");

const apiKey = process.env.MAILCHIMP_API_KEY;
const server = process.env.MAILCHIMP_SERVER;

client.setConfig({
  apiKey: apiKey,
  server: server,
});

export async function run() {
  const response = await client.lists.getListMembersInfo("d643060e11", {
    count: 1000,
    fields: ["members.id", "members.email_address", "members.full_name"],
    // offset: 200
  });
  // console.log(response.members.slice(-1)[0] );
  console.log(response);
}

run();
