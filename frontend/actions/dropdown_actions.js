export const DROP_DOWN = 'DROP_DOWN';
export const CLOSE_DROP_DOWNS = 'CLOSE_DROP_DOWNS';

export const dropDown = (payload) => ({
  type: DROP_DOWN,
  payload
})

export const closeDropDowns = (payload) => ({
  type: CLOSE_DROP_DOWNS,
  payload
})
