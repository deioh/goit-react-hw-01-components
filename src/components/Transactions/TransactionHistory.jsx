//import React from 'react'
import s from './Transactions.module.css'
export const TransactionHistory = ({items}) => {
  return (
    <table className={s.TransactionHistory}>
    <thead className={s.thead}>
      <tr className={s.trhead}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody className={s.tbody}>
    {items.map(({ id, type, amount ,currency }) => (
      <tr className={s.trbody}>
        <td className={s.tdbody}>{type}</td>
        <td className={s.tdbody}>{amount}</td>
        <td className={s.tdbody}>{currency}</td>
      </tr>
    ))}
    </tbody>
  </table>

)}
