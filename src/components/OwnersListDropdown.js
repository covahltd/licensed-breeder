import React, { useEffect } from "react";

export const OwnersListDropdown = (props) => {
  const [owners, setOwners] = React.useState();
  useEffect(() => {
    async function getOwnersNetlify() {
      const response = await fetch("/.netlify/functions/GetOwnersList");
      let ownersJSON = await response.json();
      setOwners(ownersJSON);
    }
    getOwnersNetlify();
  }, [setOwners]);
  if (!owners) return;
  function selectChanged(event) {
    if (event.target.selectedIndex === 0) {
      props.setOwner(null);
    } else {
      props.setOwner(owners.members[event.target.selectedIndex - 1]);
    }
  }
  return (
    <select
      name="OwnersListDropdown"
      id="OwnersListDropdown"
      onChange={selectChanged}
    >
      <option value="">Owner</option>
      {owners.members.map((member) => {
        return (
          <option value={member.id} key={member.id}>
            {member.merge_fields.FNAME} {member.merge_fields.LNAME}
          </option>
        );
      })}
    </select>
  );
};
