import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import CurrencyConverter from "./components/CurrencyConverter";

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [currency, setCurrency] = useState("INR");
  const [convertedTotal, setConvertedTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  const total = expenses.reduce((acc, item) => acc + Number(item.amount), 0);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`https://open.er-api.com/v6/latest/USD`);

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();

        const rate = data.rates[currency];

        const converted = (total * rate).toFixed(2);

        setConvertedTotal(converted);
      } catch (err) {
        setError("Failed to fetch exchange rate");
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [currency, total]);

  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      <div className="top-section">
        <ExpenseForm addExpense={addExpense} />

        <CurrencyConverter
          currency={currency}
          setCurrency={setCurrency}
          convertedTotal={convertedTotal}
          loading={loading}
          error={error}
        />
      </div>

      <SummaryPanel expenses={expenses} total={total} />

      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}
