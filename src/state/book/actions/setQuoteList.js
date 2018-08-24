// @flow
import type {Action} from '../../../state/types'

export type SetQuoteListPayload = {
  // TODO: Add payload content
}

const id = 'book/SET_QUOTE_LIST'

export const setQuoteList = (): Action<SetQuoteListPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

setQuoteList.id = id
