import React, { useEffect, useState } from 'react'

// 8. useEffectでコールバックを実装しよう

const UseEffect = (props) => {
  const [stateObj, setState] = useState(props)
  const {name, price} = stateObj 

  useEffect(() => {
    // レンダリングの後に呼ばれる。componentDidMount, componentDidUpdateと似ている。頻繁に実行される。
    console.log("**useEffect invokeされたよ componentDidMount, componentDidUpdate")
  })
  useEffect(() => {
    // 第2引数に[]を渡すとマウントされたときだけ。ボタンを押したりした際は動かない。
    console.log("**useEffect invokeされたよ componentDidMount")
  }, [])
  useEffect(() => {
    // 第2引数の[]の中を指定するとその値の場合のみ。テキストボックスとリセットボタン。
    console.log("**useEffect invokeされたよ nameが変更された場合のみ")
  }, [name])


  const renderPeriod = () => {
    console.log("** renderPeriod() うごくよ")
    return '。'
  }

  const resetFunc = () => {
    setState(props)
  }

  const decreFuncSample = () => {
    let updatedState = Object.assign({}, stateObj)
    updatedState.price = price - 1;
    setState(updatedState)
  }

  // タグ外で文字列を返す普通の関数コールは renderPeriod()のように () がいる。onClickの中はいらない。
  return (
    <>
      <p>UseEffect: 現在の{name}は、{price}円だよ {renderPeriod()}</p>
      <button onClick={() => setState({...stateObj, price: price + 1})}>+1するよ</button>
      <button onClick={decreFuncSample}>-1するよ</button>
      <button onClick={resetFunc}>リセット</button>
      <input value={stateObj.name} onChange={e => setState({...stateObj, name: e.target.value})} /> 
    </>
  );
}

// 外部から渡した方がすっきりする。
UseEffect.defaultProps = {
  name: 'サンプル',
  price: 1000,
}


export default UseEffect;
