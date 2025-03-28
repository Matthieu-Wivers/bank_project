import React, { useEffect, useState } from 'react';

const TransationDisplay = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const storedTransactions = localStorage.getItem('transactions') || '';
        const transactionPattern = /(\d+):name_(.*?)_value_(.*?)_desc_(.*?)-/g;
        let match;
        const transactionsArray = [];

        while ((match = transactionPattern.exec(storedTransactions)) !== null) {
            const [_, id, name, value, desc] = match;
            transactionsArray.push({ id, name, value, desc });
        }

        setTransactions(transactionsArray.reverse());
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <th>{transaction.name}</th>
                            <td><i>{transaction.value}</i>€</td>
                            <td>{transaction.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransationDisplay;
