
const ExpenseForm = ({handleCharge, handleAmount, handleSubmit, charge, amount}) => {
  return (
    <form>
      <div>
        <div>
            <label htmlFor="expense">charge:</label>
            <input 
                type="text" 
                id="charge" 
                name="charge"
                placeholder="e.g. rent"
                value={charge}
                onChange={handleCharge}
            />
        </div>
        <div>
            <label htmlFor="amount">amount:</label>
            <input 
                type="text" 
                id="amount" 
                name="amount"
                placeholder="e.g. 100"
                value={amount}
                onChange={handleAmount}
            />
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>submit</button>
    </form>
  )
}

export default ExpenseForm;
