import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    
   
    const getData = (info) =>{
        const expenseData = {
            ...info,
            id: Math.random().toString()
        }
      
        props.onDataExpense(expenseData)
    }
  return (
    <div className="new-expense">
        <ExpenseForm onDataGet={getData} />
    </div>
  );
};

export default NewExpense;
