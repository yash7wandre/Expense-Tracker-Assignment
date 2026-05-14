export default function CurrencyConverter({
  currency,
  setCurrency,
  convertedTotal,
  loading,
  error,
}) {
  return (
    <div className="card converter">
      <h2>Currency Converter</h2>

      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="AUD">AUD</option>
        <option value="CAD">CAD</option>
      </select>

      {loading ? (
        <p>Loading exchange rates...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <h3>
          Total in {currency}: {convertedTotal}
        </h3>
      )}
    </div>
  );
}
