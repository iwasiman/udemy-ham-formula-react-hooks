import React, { useState } from 'react'

// 8. 複数の状態を1つのオブジェクトに統合しよう

const MultiStateToOneObj = (props) => {
  const [stateObj, setState] = useState(props)
  const {name, price} = stateObj //ES2018の分割代入。これでstate.nameがもっと短くなる

  //<button onClick={() => setState(props)}>とするとさらに短くなる。
  const resetFunc = () => {
    setState(props)
  }

  // priceを減らす所を関数に外出ししてみる。無理にJSXの中に1行で書くよりこっちが分かりやすいような気はする。
  const decreFuncSample = () => {
    //let updatedState = state; // これは間違い。同じもの参照してしまう。
    //let updatedState = {...state} // スプレッド構文で複製する
    let updatedState = Object.assign({}, stateObj) // 複製の従来のやり方。上と等価
    updatedState.price = price - 1;
    setState(updatedState)
  }

  // ES2018のスプレッド構文 ...state でstateの中のキー：値の組が展開してその変数に複製される。
  return (
    <>
    <p>MultiStateToOneObj: 現在の{name}は、{price}円だよ</p>
    <button onClick={() => setState({...stateObj, price: price + 1})}>+1するよ</button>
    <button onClick={decreFuncSample}>-1するよ</button>
    <button onClick={resetFunc}>リセット</button>
    <input value={stateObj.name} onChange={e => setState({...stateObj, name: e.target.value})} /> 
    </>
  );
}

// 外部から渡した方がすっきりする。
MultiStateToOneObj.defaultProps = {
  name: 'サンプル',
  price: 1000,
}


export default MultiStateToOneObj;
