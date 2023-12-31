import React from 'react'

import { AppBar, Badge, Box, Toolbar } from '@mui/material'
import Image from 'next/image';

import logoSvg from '../../assets/img/logo.svg'
import userSvg from '../../assets/img/user.svg'
import favSvg from '../../assets/img/favorite.svg'
import cartSvg from '../../assets/img/cart.svg'
import styles from './Header.module.scss'
import { HeaderBurger } from '../HeaderBurger';
import { Search } from '../Search';


export const appBarStyles = {
    boxShadow: 'none',
    pl: {
        xl: '5rem',
        lg: '3.5rem',
        md: '3.5rem',
        sm: '1.5rem',
        xs: '1.5rem'
    },
    pr: {
        xl: '5rem',
        lg: '3.5rem',
        md: '3.5rem',
        sm: '1.5rem',
        xs: '1.5rem'
    },
    pt: '22px',
    pb: '22px',
    backgroundColor: '#ffffff',
    position: 'static'
}

export const Header = () => {

    const badgeStyles = {
        cursor: 'pointer',
        background: '#F6F6F6',
        p: '.65rem',
        borderRadius: '8px',
    }

    return (
        <>
            <Box sx={{
                display: {
                    md: 'flex',
                    xs: 'none',
                }
            }}>
                <AppBar sx={appBarStyles}>
                    <Toolbar sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 0
                    }}>
                        <Image style={{ cursor: 'pointer' }} src={logoSvg} alt="LOGO" />
                        <div className={styles.linksWrapper}>
                            {['Shop', 'Men', 'Women', 'Combos', 'Joggers'].map((text) => (
                                <a href='#' key={text} className={styles.headerLink}>{text}</a>
                            ))}
                        </div>
                        <Search />
                        <Box sx={{
                            display: {
                                md: 'flex',
                                sm: 'none'
                            },
                            gap: {
                                lg: '.75rem',
                                md: '.5rem',
                                sm: '.375rem',
                                xs: '.25rem'
                            }
                        }}>
                            {[
                                { key: 'fav', icon: favSvg },
                                { key: 'user', icon: userSvg },
                                { key: 'cart', icon: cartSvg }
                            ].map((item) => (
                                <Badge key={item.key} sx={badgeStyles} >
                                    <Image src={item.icon} alt={item.key} />
                                </Badge>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <HeaderBurger />
        </>
    )
}

