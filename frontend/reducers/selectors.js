export const selectLeads = (lead) => {
  const leads = Object.keys(lead.entities).map( (id) => {
    return lead.entities[id];
  });
  return leads;
}
