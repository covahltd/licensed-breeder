import React from "react";
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
    fields: ["members.id", "members.email_address", "members.full_name", "members.merge_fields"],
    offset: 200
  });
  // console.log(response.members.slice(-1)[0] );
  console.log(response.members);
  return response;
}

export const OwnersListDropdown = async () => {
  const response = await getOwners();
  return <select name="OwnersListDropdown" id="OwnersListDropdown">
            <option value={response.members[0].merge_fields.FNAME}>{response.members[0].merge_fields.FNAME}</option>
          </select>;
}