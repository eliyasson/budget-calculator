import React from 'react'

const ExpenseItem = () => {
  

  return (
    <li>
      <div>
        <span>{charge}</span>
        <span>€{amount}</span>
      </div>
      <div>
        <button>edit</button>
        <button>delete</button>
      </div>
    </li>
  )
}

export default ExpenseItem
