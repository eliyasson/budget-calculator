import React from 'react'

const ExpenseItem = ({handleDelete, expense: { id, charge, amount }}) => {
  

  return (
    <li>
      <div>
        <span>{charge} {amount}€</span>
      </div>
      <div>
        <button>edit</button>
        <button onClick={() =>handleDelete(id)}>delete</button>
      </div>
    </li>
  )
}

export default ExpenseItem
