import React, { useContext } from 'react';

import { GlobalContest } from '../context/GlobalState';

export const TransactionContent = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContest);

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                    {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span> 
                    <button 
                    onClick = {() => deleteTransaction(transaction._id)}
                    className="delete-btn">X</button>
        </li>
    )
}
