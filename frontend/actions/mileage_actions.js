export const RECEIVE_MILEAGE = 'RECEIVE_MILEAGE'
export const RECEIVE_MILEAGES = 'RECEIVE_MILEAGES'

export const receiveMileage = (mileage) => ({
  type: RECEIVE_MILEAGE,
  mileage
})

export const receiveMileages = (mileages) => ({
  type: RECEIVE_MILEAGES,
  mileages
})
