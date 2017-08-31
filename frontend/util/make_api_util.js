export const fetchMakes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/makes'
  })
);
