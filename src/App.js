//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react'

const App = () => {
  const [count, setCount]= useState(0) // 分割代入する。abc, setAbcがお作法。
  console.log({count})
  console.log({setCount})

  const incrementFunc = () => setCount(count + 1) // ClassコンポーネントのsetStateと同じ
  const decrementFunc = () => setCount(count - 1)

  // setCountの第一引数に関数を取るパターン
  const incrementFunc2 = () => setCount(previousCount => previousCount + 1)
  const decrementFunc2 = () => setCount(previousCount => previousCount - 1)

  const resetFunc = () => setCount(0)
  const doubleFunc = () => setCount(count * 2)
  // const divide3Func = () => {
  //   const amari = count%3
  //   if (amari === 0) {
  //     setCount(count/3)
  //   }
  // }
  // setCount関数の引数に関数を入れるパターン
  // const divide3Func = () => setCount(previousCount => {
  //   if (previousCount %3 === 0) {
  //     return previousCount / 3
  //   } else {
  //     return previousCount
  //   }
  // })
  // さらに三項演算子で短く書くパターン。return文前後の｛｝も消せる。
  const divide3Func = () => setCount(previousCount => {
    return previousCount % 3 === 0? previousCount / 3 : previousCount
  })



  // TOPの空タグを消したい時は<React.Fragment>か、短縮形の<>
  return (
    <React.Fragment>
      App: シンプルリアクトでHooksを使うよ
      <div>count: {count}</div>
      <div>
        <button onClick={incrementFunc}>+1するぴょん</button>
        <button onClick={decrementFunc}>-1するぴょん</button>
      </div>
      <div>
        <button onClick={incrementFunc2}>+1するわん</button>
        <button onClick={decrementFunc2}>-1するわん</button>
      </div>
      <div>
        <button onClick={resetFunc}>リセツト</button>
        <button onClick={doubleFunc}>x2!</button>
        <button onClick={divide3Func}>3の倍数の時だけ3で割るぞい</button>
      </div>
    </React.Fragment>
  );
}

export default App;
