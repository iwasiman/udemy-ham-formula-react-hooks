import React, {useContext}  from 'react'
import OperationLog from './OperationLog'
import AppContext from '../contexts/AppContext'

const OperationLogs = () => {

  const {state} = useContext(AppContext)

return (
    <>
      <h4>操作ろぐ一覧あるよ</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>せつめい</th>
            <th>つくられたひ</th>
          </tr>

        </thead>
        <tbody>
          { state.operationLogs.map((row, index) => (<OperationLog key={index} row={row} />))}
        </tbody>
      </table>
    </>
  )
}

export default OperationLogs