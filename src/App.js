import { useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';


function App() {
  //The expenses state variable should be initialized as an empty array, since it will hold a list of expenses.
  //The setExpenses function should be used to add a new expense to the expenses list
  const [expenses, setExpenses] = useState([]); 
  
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }
  const handleAmount = (e) => {
    setAmount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Math.floor(Math.random() * 1000),
      amount: parseFloat(amount), //The amount field should be converted to a float before creating a new expense object.
      charge: charge,
    }

    setExpenses([...expenses, newExpense])

    setCharge("");
    setAmount("");
  }

  const handleDelete = (id) => {
    const newExpense = expenses.filter((expense) => {
      return expense.id !== id;
    })
    setExpenses(newExpense);
  }
  return (
    <>
      <Alert/>
      <h1>budget calculator</h1>
      <main className='App'>
        <ExpenseForm handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} charge={charge} amount={amount}/>
        <ExpenseList expenses={expenses} handleDelete={handleDelete}/>
      </main>
      <h1>
        total spending: €{expenses.reduce((accumulator, currentValue) => {
          return accumulator += currentValue.amount;
        }, 0)}
      </h1>
      
    </>
  );
}

export default App;
