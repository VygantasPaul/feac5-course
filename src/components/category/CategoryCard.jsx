// /components/home/CategoryCard.js

import React from 'react';
import styles from './BusinessCard.module.scss';

const CategoryCard = ( { business }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.name}>{business.name}</h2>
            <p className={styles.category}>Category: {business.category}</p>
            <p className={styles.location}>Location: {business.location}</p>
            <p className={styles.rating}>Rating: {business.rating} ⭐</p>
        </div>
    );
};

export default CategoryCard;
