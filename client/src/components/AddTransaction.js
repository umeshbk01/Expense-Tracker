import React, { useState, useContext } from 'react'

import { GlobalContest } from '../context/GlobalState';


export const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContest);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()*100000),
            text, 
            amount : +amount
        }
        addTransaction(newTransaction)
    }

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter Text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="number">
                    Amount <br />
                    (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange = { e => setAmount(e.target.value)} placeholder="Enter amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
