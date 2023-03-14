import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const newExpenseHandler = (newExpense) => {
    // Passing to app.js
    newExpense = {
      ...newExpense,
      id: Math.random.toString(),
    };
    props.onNewData(newExpense);

    //Only on saving a new expense(i.e. add expense is clicked)  this function is triggered
    setIsCollapsed(true);
  };

  const addExpenseClickHandler = () => {
    setIsCollapsed(false);
  };

  if (isCollapsed)
    return (
      <div className="new-expense">
        <button onClick={addExpenseClickHandler}>Add a new Expense</button>
      </div>
    );

  return (
    <div className="new-expense">
      <ExpenseForm
        onNewExpenseData={newExpenseHandler}
        setCollapse={setIsCollapsed}
      />
    </div>
  );
};

export default NewExpense;
