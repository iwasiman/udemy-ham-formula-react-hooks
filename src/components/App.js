
import React, {useEffect, useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers' // reducers/index が省略できる

console.log("AppContext", {AppContext});

const APP_KEY = 'appWithRedux'
const App = () => {
  const storedStateJsonStr = localStorage.getItem(APP_KEY)
  // 取れなかったらnullなので初期値。
  const initialState = storedStateJsonStr ? JSON.parse(storedStateJsonStr) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatchFunc] = useReducer(reducer, initialState) // 第2引数が初期値。第3引数は初期化処理、今回は不要

  // stateが変わったら実行。中の配列とかも検知。
  useEffect(() => {
    const stateJson = JSON.stringify(state)
    console.log("useEffect:state変わったので保存だぞい", stateJson);
    localStorage.setItem(APP_KEY, stateJson)
  }, [state]  )
  console.log("App", {state})

  // TOPの空タグを消したい時は<React.Fragment>か、短縮形の<>
  // class属性はclassNameと書く。for属性はhtmlForと書く。

  // useContextで{}のオブジェクト形式でstate, dispatchFuncを渡す。
  // すると子コンポーネントの属性で渡すのが不要!
  // これまで↓
  //<EventForm state={state} dispatchFunc={dispatchFunc} />
  //<Events state={state} dispatchFunc={dispatchFunc} />

  return (
    <AppContext.Provider value={{ state, dispatchFunc }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}

export default App
