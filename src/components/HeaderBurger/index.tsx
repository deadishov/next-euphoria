import { AppBar, Box, Toolbar } from '@mui/material';
import { appBarStyles } from '../Header';
import Image from 'next/image';

import logoSvg from '../../assets/img/logo.svg'
import { Drawer } from '../Drawer';
import { DrawerList } from '../DrawerList';
import { Search } from '../Search';

export const HeaderBurger = () => {
    return (
        <Box sx={{
            display: {
                md: 'none',
                xs: 'flex',
            }
        }}>
            <AppBar
                sx={appBarStyles}>
                <Toolbar sx={{
                    color: '#000',
                    display: 'flex',
                    justifyContent: {
                        sm: 'space-between',
                        xs: 'space-around'
                    },
                    alignItems: 'center',
                    padding: 0
                }}>
                    <Image style={{ cursor: 'pointer' }} src={logoSvg} alt="LOGO" />
                    <Search />
                    <Drawer children={<DrawerList />} />
                </Toolbar>
            </AppBar>
        </Box>
    )
}