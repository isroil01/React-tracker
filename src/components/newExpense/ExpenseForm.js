import React, { useState } from "react";

import './ExpenseForm.css'
export const ExpenseForm = (props) => {
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');

    const titleHAndeler = (e) =>{
        setTitle(e.target.value)
       
    };

    const amountHAndeler =(e) =>{
        setAmount(e.target.value);
    };

    const dateHAndeler = (e) =>{
        setDate(e.target.value);
    };

    const submitHandeler = (e) =>{
        e.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }

        props.onDataGet(expenseData);

        setAmount('');
        setDate('');
        setTitle('');

       
    }
  return (
    <form onSubmit={submitHandeler}>
        <div className="newexpense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleHAndeler} value={title} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountHAndeler} value={amount} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateHAndeler} value={date} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
  );
};
