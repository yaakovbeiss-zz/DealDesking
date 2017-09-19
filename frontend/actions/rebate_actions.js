export const RECEIVE_REBATE = 'RECEIVE_REBATE'
export const RECEIVE_REBATES = 'RECEIVE_REBATES'

export const receiveRebate = (rebate) => ({
  type: RECEIVE_REBATE,
  rebate
})

export const receiveRebates = (rebates) => ({
  type: RECEIVE_REBATES,
  rebates
})
