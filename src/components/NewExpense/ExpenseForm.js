import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date),
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData)

        setTitle('')
        setAmount('')
        setDate('')
    }
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value)
                            console.log(title)
                        }}

                    />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={amount}
                        onChange={(event) => {
                            setAmount(event.target.value)
                            console.log(amount)
                        }}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={date}
                        onChange={(event) => {
                            setDate(event.target.value)
                            console.log(date)
                        }}
                    />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='button' onClick={formSubmitHandler}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;