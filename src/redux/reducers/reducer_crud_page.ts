import { RETRIEVE_BOOKS } from '../actions/action_crud_page'

const defaultStatus = {
  booksRecord: [],
}
export default (state = defaultStatus, { type = '', payload = [] }) => {
  switch (type) {
    case RETRIEVE_BOOKS:
      return {
        ...state,
        booksRecord: payload,
      }
    default:
      break
  }
  return state
}
