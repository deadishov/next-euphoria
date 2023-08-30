import React from 'react'

import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Image from 'next/image'
import styles from './DrawerList.module.scss'

import userSvg from '../../assets/img/user.svg'
import favSvg from '../../assets/img/favorite.svg'
import cartSvg from '../../assets/img/cart.svg'

export const DrawerList = () => {
    return (
        <>
            <List >
                {['Shop', 'Men', 'Women', 'Combos', 'Joggers'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton className={styles.burgerLink}>
                            <ListItemText sx={{ textAlign: 'center' }} primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {[{ name: 'Favorites', icon: favSvg }, { name: 'Profile', icon: userSvg }, { name: 'Cart', icon: cartSvg }].map((item, index) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton className={styles.burgerLink} >
                            <ListItemIcon>
                                <Image src={item.icon} alt={item.name} />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </>
    )
}