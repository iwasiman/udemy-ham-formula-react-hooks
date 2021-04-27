
import React, {useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers' // reducers/index が省略できる

console.log("AppContext", {AppContext});

const App = () => {
  const [state, dispatchFunc] = useReducer(reducer, []) // 第3引数は初期化処理、今回は不要

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
      </div>
    </AppContext.Provider>
  );
}

export default App
