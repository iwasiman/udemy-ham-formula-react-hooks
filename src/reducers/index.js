import { combineReducers } from 'redux'

import events from './events'
import operationLogs from './operationLogs'

// 24. イベント用のreducerのリファクタリング 13m


export default combineReducers({
  events,
  operationLogs
})