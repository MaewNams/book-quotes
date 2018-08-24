// @flow

import type {ApplicationState} from '../../types'
import type {BookState} from '../types'

export function getQuoteList(appState: ApplicationState): ApplicationState {
  return appState
}

function _getQuoteList(state: BookState): BookState {
  return state
}

getQuoteList.internal = _getQuoteList
