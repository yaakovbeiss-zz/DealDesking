export const RECEIVE_TERM = 'RECEIVE_TERM'
export const RECEIVE_TERMS = 'RECEIVE_TERMS'

export const receiveTerm = (term) => ({
  type: RECEIVE_TERM,
  term
})

export const receiveTerms = (terms) => ({
  type: RECEIVE_TERMS,
  terms
})
