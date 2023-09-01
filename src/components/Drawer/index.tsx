"use client"

import { Box, Button, TextField } from '@mui/material';
import React, { ReactNode } from 'react'
import styles from './Drawer.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer as DrawerFC } from '@mui/material';

interface DrawerProps {
    children: ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ children }) => {
    const [state, setState] = React.useState(false);

    const toggleDrawer = () =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState(!state);
        };

    const list = () => (
        <>
            <Box
                sx={{ minWidth: '200px', color: '#807D7E' }}
                role="presentation"
                onClick={toggleDrawer()}
                onKeyDown={toggleDrawer()}
            >
                {children}
            </Box>
            <Box className={styles.burgerSearch} sx={{ justifyContent: 'center', pt: '10px' }} >
                <TextField
                    color='secondary'
                    sx={{ maxWidth: '80%' }}
                    label="Search"
                    variant="standard" />
            </Box>
        </>
    );

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer()}><MenuIcon sx={{ color: '#000' }} /></Button>
                    <DrawerFC
                        anchor={anchor}
                        open={state}
                        onClose={toggleDrawer()}
                    >
                        {list()}
                    </DrawerFC>
                </React.Fragment>
            ))}
        </div>
    )
}
