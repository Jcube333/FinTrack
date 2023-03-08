import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>8th October</div>
      <div className="expense-item__description">
        <h2>Party to friends</h2>
        <div className="expense-item__price">$10.00</div>
      </div>
    </div>
  );
}
