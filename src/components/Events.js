import React, {useContext}  from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

//const Events = ({state, dispatchFunc}) => {
const Events = () => {

  const {state} = useContext(AppContext)

  // Hooks以前のReact Contextを使ったやり方
//   <AppContext.Consumer>
//   {value => { return <div>{value}</div>}}
// </AppContext.Consumer>

return (
    <>
      <h4>イベント一覧あるよ</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>たいとる</th>
            <th>ぼでぃー</th>
          </tr>

        </thead>
        <tbody>
          { state.map((row, index) => (<Event key={index} row={row} />))}
        </tbody>
      </table>
    </>
  )
}

export default Events