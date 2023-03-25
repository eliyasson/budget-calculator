import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses, handleDelete}) => {
  return (
    <>
        <ul>
            {expenses.map((expense) => {
                return (
                <ExpenseItem 
                  key={expense.id} 
                  expense={expense}
                  handleDelete={handleDelete}
                  />)
                  
            })}
        </ul>
        {expenses.length > 0 && <button className='btn'>
            Clear Expenses</button>}
      
    </>
  )
}

export default ExpenseList
