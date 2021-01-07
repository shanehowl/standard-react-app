import { RETRIEVE_BOOKS } from '../redux/actions/action_crud_page'

export interface Book {
  id: string | number
  name: string
  noOfItems: number
}

export interface RetrieveBooksAction {
  type: typeof RETRIEVE_BOOKS
  payload: Book[]
}

export interface TableCols {
  title: string
  accessor: string
  sortable: boolean
}
