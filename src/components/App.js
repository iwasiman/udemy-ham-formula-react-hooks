
import React, { useState, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Event from './Event'
import reducer from '../reducers' // reducers/index が省略できる

const App = () => {
  const [state, dispatchFunc] = useReducer(reducer, []) // 第3引数は初期化処理、今回は不要
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e) => {
    console.log("addEvent() in ", {title, body});
    e.preventDefault(); //ボタン押下時に画面全体がリロードされるをの防ぐ。SPAでよく使う。
    dispatchFunc({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('') // 新規作成後に空にする
    setBody('') // 同上
  }

  const deleteAllEvents = (e) => {
    e.preventDefault()
    const result = window.confirm('すべてのイベントを削除するのはまことでござるか?')
    if (result) {
      dispatchFunc({
        type: 'DELETE_ALL_EVENTS'
      })
    }
  }

  const unCreatable = title === '' || body === '' // ()で囲いたいが不要のようだ。

  console.log({state}) // イベント作成後だと、配列にオブジェクトが追加されていく

  // TOPの空タグを消したい時は<React.Fragment>か、短縮形の<>
  // class属性はclassNameと書く。for属性はhtmlForと書く。
  return (
    <div className="container-fluid">
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
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全イベント削除でござる</button>
      </form>

      <h4>イベント一覧あるよ</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>

        </thead>
        <tbody>
          { state.map((row, index) => (<Event key={index} row={row} dispatchFunc={dispatchFunc} />))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
