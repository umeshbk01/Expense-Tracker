import React, { useContext, useEffect } from 'react';

import { GlobalContest } from '../context/GlobalState';

import { TransactionContent } from './TransactionContent';


export const Transaction = () => {
    const { transactions, getTransactions } = useContext(GlobalContest);
    
    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
            {transactions.map(transaction => (
                <TransactionContent key ={transaction._id} transaction={transaction} />
            ))}

                
            </ul>
        </div>
    )
}
