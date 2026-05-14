export default function SummaryPanel({ expenses, total }) {
  const categories = {};

  expenses.forEach((item) => {
    categories[item.category] =
      (categories[item.category] || 0) + Number(item.amount);
  });

  return (
    <div className="card summary">
      <h2 className=" text-2xl align-middle font-bold">
        Total Expenses: ${total}
      </h2>

      <h3>Category Breakdown</h3>

      {Object.keys(categories).length === 0 ? (
        <p>No categories yet.</p>
      ) : (
        Object.entries(categories).map(([category, amount]) => (
          <p key={category}>
            {category}: ${amount}
          </p>
        ))
      )}
    </div>
  );
}
