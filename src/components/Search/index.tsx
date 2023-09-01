import React from 'react'
import styles from './Search.module.scss'
import Image from 'next/image'
import searchSvg from '../../assets/img/search.svg'

export const Search = () => {
    return (
        <div className={styles.searchWrapper}>
            <input className={styles.search} placeholder='Search' type="text" />
            <Image className={styles.searchImg} src={searchSvg} alt="search-icon" />
        </div>
    )
}