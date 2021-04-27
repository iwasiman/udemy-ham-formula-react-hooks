import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'

// 25. 操作ログ用のreducerを作成しよう 16m

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt
      }
      // 先頭に最新の操作ログ、その後に既存。スプレッド構文を使うと以下のように書ける。
      return [operationLog, ...state]
    case DELETE_ALL_OPERATION_LOGS:
      return []
    default:
      return state
  }

}
export default operationLogs