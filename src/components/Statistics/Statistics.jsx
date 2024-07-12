//import React from 'react'

import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className="title">{title}</h2>
      <ul className={s.menu}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.item}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
