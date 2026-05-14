import ExpenseCard from "./ExpenseCard";

export default function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="card">
      <h2
        style={{ paddingBottom: "10px" }}
        className=" text-2xl align-middle font-bold "
      >
        Expenses
      </h2>

      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <div className="expense-list">
          {expenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
            />
          ))}
        </div>
      )}
    </div>
  );
}
