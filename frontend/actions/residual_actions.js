export const RECEIVE_RESIDUAL = 'RECEIVE_RESIDUAL'
export const RECEIVE_RESIDUALS = 'RECEIVE_RESIDUALS'

export const receiveResidual = (residual) => ({
  type: RECEIVE_RESIDUAL,
  residual
})

export const receiveResiduals = (residuals) => ({
  type: RECEIVE_RESIDUALS,
  residuals
})
