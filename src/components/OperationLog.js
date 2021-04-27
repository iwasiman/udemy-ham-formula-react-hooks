import React from 'react'


const OperationLog =({ index, row }) => {


  return (
    <tr key={index}>
      <td>{row.description}</td>
      <td>{row.operatedAt}</td>
    </tr>
  )
}
export default OperationLog
