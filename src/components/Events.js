import React from 'react'
import Event from './Event'

const Events = ({state, dispatchFunc}) => {
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
          { state.map((row, index) => (<Event key={index} row={row} dispatchFunc={dispatchFunc} />))}
        </tbody>
      </table>
    </>
  )
}

export default Events