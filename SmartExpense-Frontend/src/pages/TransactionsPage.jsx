
import React from 'react'

export default function TransactionsPage() {
  const data = [
    { id: 1, type: 'Income', amount: 5000, note: 'Salary' },
    { id: 2, type: 'Expense', amount: 50, note: 'Groceries' },
  ]
  return (
    <div style={{ padding: '30px' }}>
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr><th>ID</th><th>Type</th><th>Amount</th><th>Note</th></tr>
        </thead>
        <tbody>
          {data.map(tx => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.type}</td>
              <td>${tx.amount}</td>
              <td>{tx.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
