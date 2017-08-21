// export const fetchLead = id => (
//   $.ajax({
//     method: 'GET',
//     url: `api/leads/${id}`
//   });
// );

export const fetchLeads = () => (
  $.ajax({
    method: 'GET',
    url: `api/leads/`
  })
);

export const createLead = (lead) => (
  $.ajax({
    method: 'POST',
    url: 'api/leads',
    data: { lead }
  })
)
export const destroyLead = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/leads/${id}`,
  })
)
