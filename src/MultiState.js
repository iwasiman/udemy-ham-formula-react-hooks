import React, { useState } from 'react'

// 7. 複数の状態を管理しよう

const MultiState = (props) => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const resetFunc = () => {
    setPrice(props.price)
    setName(props.name)
  }

  // <!-- onChange={() =>setName(name)ではだめ}-->
  return (
    <>
    <p>MultiState: 現在の{name}は、{price}円だよ</p>
    <button onClick={() => setPrice(price + 1)}>+1するよ</button>
    <button onClick={() => setPrice(price - 1)}>-1するよ</button>
    <button onClick={resetFunc}>リセット</button>
    <input value={name} onChange={e => setName(e.target.value)} /> 
    </>
  );
}

// 外部から渡した方がすっきりする。
MultiState.defaultProps = {
  name: 'サンプル',
  price: 1000,
}


export default MultiState;
