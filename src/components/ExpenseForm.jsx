import { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount) return;

    addExpense({
      id: Date.now(),
      name,
      amount,
      category,
    });

    setName("");
    setAmount("");
    setCategory("Food");
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount (USD)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Marketing</option>
        <option>Utilities</option>
        <option>Other</option>
      </select>

      <button type="submit">Add Expense</button>
    </form>
  );
}
