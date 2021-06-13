import { UPDATE_USER_PROFILE } from '../actions/action_authentication'

const defaultState = {
  userProfile: undefined,
}
export default (state = defaultState, { type = '', payload = undefined }) => {
  switch (type) {
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      }
    default:
      break
  }
  return state
}
