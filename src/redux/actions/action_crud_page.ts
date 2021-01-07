import { Dispatch } from 'react'
import { RetrieveBooksAction, Book } from '../../modals/crud'
import { getAvailableBooks } from '../../services/service-crud-page'

export const RETRIEVE_BOOKS = 'RETRIEVE_BOOKS'
export const retrieveAvailableBooks = () => {
  return (dispatch: Dispatch<RetrieveBooksAction>) => {
    getAvailableBooks().then((response: Book[]) => {
      return dispatch({
        type: RETRIEVE_BOOKS,
        payload: response,
      })
    })
  }
}
