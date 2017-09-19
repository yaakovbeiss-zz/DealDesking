export const RECEIVE_MONEY_FACTOR = 'RECEIVE_MONEY_FACTOR'
export const RECEIVE_MONEY_FACTORS = 'RECEIVE_MONEY_FACTORS'

export const receiveMoneyFactor = (moneyFactor) => ({
  type: RECEIVE_MONEY_FACTOR,
  moneyFactor
})

export const receiveMoneyFactors = (moneyFactors) => ({
  type: RECEIVE_MONEY_FACTORS,
  moneyFactors
})
