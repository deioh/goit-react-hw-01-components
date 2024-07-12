//import React from 'react'
import data from '../../components/data/data.json';
import s from './Statistics.module.css';

export const Statistics = ({ id, label, percentage }) => {
  return (
    <section className={s.statistics}>
      <h2 className="title">Upload stats</h2>
      <ul className={s.menu}>
        <li className={s.item}>
          <span className={s.label}>data.label</span>
          <span className={s.percentage}>4%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.mp3</span>
          <span className={s.percentage}>14%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.pdf</span>
          <span className={s.percentage}>41%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.mp4</span>
          <span className={s.percentage}>12%</span>
        </li>
      </ul>
    </section>
  );
};
