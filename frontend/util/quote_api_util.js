export const fetchQuotes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/quotes'
  })
);

export const createQuote = (quote) => (
  $.ajax({
    method: 'POST',
    url: 'api/quotes',
    data: { quote }
  })
)
export const destroyQuote = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/quotes/${id}`,
  })
)
