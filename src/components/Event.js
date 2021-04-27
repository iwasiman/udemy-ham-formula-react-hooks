import React, {useContext} from 'react'

import {DELETE_EVENT} from '../actions' // actions/index.js を省略
import AppContext from '../contexts/AppContext'

// <Event key={index} row={row} dispatchFunc={dispatchFunc} /> の{}の中と等しくないと動かない
// 講座ではrowでなくevent、dispatch という変数名。
const Event =({ index, row }) => {
  const {dispatchFunc} = useContext(AppContext)

  console.log("Event.js Event() execute,", {row}, {dispatchFunc});
  const handleClickDeleteBtn = () => {
    const result = window.confirm(`イベント(id=${row.id})を削除するのはまことでござるか?`)
    if (result) {
      dispatchFunc({
        type: DELETE_EVENT,
        id: row.id,
      })
    }
  }

  return (
    <tr key={index}>
      <td>{row.id}</td>
      <td>{row.title}</td>
      <td>{row.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteBtn}>削除</button></td>
    </tr>
  )
}
export default Event
