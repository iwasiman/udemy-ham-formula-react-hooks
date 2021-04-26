//  12. イベントの状態を遷移を管理するuseReducerを作成しよう

// action = {
//   type: 'CREATE_EVENT',
//   title: '東京2020のお知らせ',
//   body: "しょうさい"
// }
// # before
// state = [
//   {id: 1, title: 'たいとる１', body: 'ぼでぃー１'},
//   {id: 2, title: 'たいとる2', body: 'ぼでぃー2'},
//   {id: 3, title: 'たいとる3', body: 'ぼでぃー3'},
// ]

const events = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const newEvent = {title: action.title, body: action.body}
      const length = state.length
      const id = length === 0 ? 1: state[length -1].id + 1
      return [...state, {id, ...newEvent}] // {}の中のid: 変数id がショートハンドで短く書ける。
    case 'DELETE_EVENT':
      return state
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}

export default events