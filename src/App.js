import { useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import { v4 as uuidv4 } from 'uuid';

const intialExpenses = [
  {id: uuidv4(), charge:"rent", amount: 1600},
  {id: uuidv4(), charge:"rent1", amount: 100},
  {id: uuidv4(), charge:"rent2", amount: 1800}
];

const numbers = [1, 2, 3, 4, 5];


function App() {
  const [expenses, setExpenses] = useState(intialExpenses);
  console.log(expenses);
  return (
    <>
      <Alert/>
      <h1>budget calculator</h1>
      <main className='App'>
        <ExpenseForm />
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        total spensing: €{expenses.reduce((accumulator, currentValue) => {
          return accumulator += currentValue.amount;
        }, 0)}
      </h1>
      
    </>
  );
}

export default App;
