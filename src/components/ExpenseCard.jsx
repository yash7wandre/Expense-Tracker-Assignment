export default function ExpenseCard({ expense, deleteExpense }) {
  return (
    <div className="expense-card">
      <div>
        <h3>{expense.name}</h3>
        <p>{expense.category}</p>
      </div>

      <div className="expense-right">
        <span>${expense.amount}</span>

        <button onClick={() => deleteExpense(expense.id)}>Delete</button>
      </div>
    </div>
  );
}
