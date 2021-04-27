
import React, {useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers' // reducers/index が省略できる
import EventForm from './EventForm'
import Events from './Events'

const App = () => {
  const [state, dispatchFunc] = useReducer(reducer, []) // 第3引数は初期化処理、今回は不要

  console.log("App", {state})

  // TOPの空タグを消したい時は<React.Fragment>か、短縮形の<>
  // class属性はclassNameと書く。for属性はhtmlForと書く。
  return (
    <div className="container-fluid">

      <EventForm state={state} dispatchFunc={dispatchFunc} />

      <Events state={state} dispatchFunc={dispatchFunc} />


    </div>
  );
}

export default App;
