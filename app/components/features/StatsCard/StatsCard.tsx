"use client";

import React from 'react';
import styles from './StatsCard.module.scss';

interface StatsCardProps {
  title: string;
  value: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <div className={styles.statsCard}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default StatsCard;
