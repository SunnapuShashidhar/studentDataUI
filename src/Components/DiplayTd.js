import React from 'react'

function DiplayTd({ student }) {
  const { name, dept, email, number, address } = student;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{number}</td>
        <td>{dept}</td>
        <td>{address}</td>
      </tr>
    </>
  )
}

export default DiplayTd