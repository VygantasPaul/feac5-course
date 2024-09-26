// /components/category/CategoryList.js

import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../consts/categories';
import CategoryCard
    from "./CategoryCard.jsx";
import styles from './VerticalCategoryList.module.scss';

const CategoryList = ({category}) => {
    const filteredBusiness = category
        ? category.filter((business) => business.category === category)
        : category;
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Categories</h3>
            <ul className={styles.list}>
                {categories.map((category) => (
                    <CategoryCard key={category} className={styles.item}>
                        <Link to={`/search/${category}`} className={styles.link}>
                            {category}
                        </Link>
                    </CategoryCard>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
