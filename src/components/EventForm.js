import React, { useContext, useState } from 'react'

import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions' // actions/index.js を省略
import AppContext from '../contexts/AppContext'
import {timeCurrentIso8601} from '../utils'

// propsで受け取るとき {}が必要。
//const EventForm = ({state, dispatchFunc}) => {
const EventForm = () => {
    //App.jsとEventForm.jsで両方このuseReducerをしてしまうと、変数stateは別々になる。
  //const [state, dispatchFunc] = useReducer(reducer, []) // 第3引数は初期化処理、今回は不要

  const {state, dispatchFunc} = useContext(AppContext)

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e) => {
    console.log("addEvent() in ", {title, body}, {dispatchFunc});
    e.preventDefault(); //ボタン押下時に画面全体がリロードされるをの防ぐ。SPAでよく使う。
    // イベント登録
    dispatchFunc({
      type: CREATE_EVENT,
      title,
      body
    })
    // 次に操作ログ登録
    dispatchFunc({
      type: ADD_OPERATION_LOG,
      description: 'イベント作成したぞよ',
      operatedAt: timeCurrentIso8601()
    })
    setTitle('') // 新規作成後に空にする
    setBody('') // 同上
  }

  const deleteAllEvents = (e) => {
    e.preventDefault()
    const result = window.confirm('すべてのイベントを削除するのはまことでござるか?')
    if (result) {
      dispatchFunc({
        type: DELETE_ALL_EVENTS
      })
      // 次に操作ログ登録
      dispatchFunc({
        type: ADD_OPERATION_LOG,
        description: '全イベント削除したぴょい',
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  const deleteAllOpeationLogs = (e) => {
    e.preventDefault()
    const result = window.confirm('すべての操作ろぐを削除するのはまことでござるか?')
    if (result) {
      // 次に操作ログ登録
      dispatchFunc({
        type:   DELETE_ALL_OPERATION_LOGS,
        description: '全ろぐ削除したぴょい',
        operatedAt: timeCurrentIso8601()
      })
    }

  }

  const unCreatable = title === '' || body === '' // ()で囲いたいが不要のようだ。

  console.log("EventForm", {state}) // イベント作成後だと、配列にオブジェクトが追加されていく
  return (
    <>
      <h4>イベント作成フォームだよ</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">たいとる</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ぼでぃー</label>
          <input className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベント作成するぞい</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>全イベント削除でござる</button>
        <button className="btn btn-danger" onClick={deleteAllOpeationLogs} disabled={state.operationLogs.length === 0}>全ろぐ削除でござる</button>
      </form>
    </>
  )
}

export default EventForm