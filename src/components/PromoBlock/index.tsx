import { Link, ListItem, Typography } from '@mui/material'
import React from 'react'
import styles from './PromoBlock.module.scss'

interface BlockProps {
    title: string,
    headline: string,
    tagline: string,
    linkText: string,
    image_url: string
}

export const PromoBlock: React.FC<{ block: BlockProps }> = ({ block }) => {
    return (
        <ListItem
            className={styles.listItem}
            sx={{
                pt: '0',
                pb: '0',
                pl: {
                    sm: '1.875rem',
                    xs: '1'
                },
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                borderRadius: '12px',
                boxShadow: '2px 2px 10px 0px rgba(0, 0, 0, 0.40)',
                width: {
                    lg: '100%',
                    md: '80%',
                    sm: '80%',
                    xs: '80%'
                },
                height: {
                    md: '22.25rem',
                    sm: '19.25rem',
                    xs: '13.8125rem',
                },
                backgroundImage: `url(${block.image_url})`,
                backgroundPositionX: '0',
                backgroundSize: '160%',
                backgroundRepeat: 'no-repeat'
            }}>
            <Typography sx={{
                fontFamily: 'inherit',
                fontSize: {
                    sm: '1.125rem',
                    xs: '0.8rem'
                },
                fontStyle: 'normal',
                fontWeight: '800',
                lineHeight: '1.875rem',
                letterSpacing: '.0156rem',
                mb: {
                    sm: '1.5rem',
                    xs: '1rem'
                }
            }} variant='h6'>{block.title}</Typography>
            <Typography variant='h2' sx={{
                fontFamily: 'inherit',
                maxWidth: {
                    sm: '18rem',
                    xs: '11rem'
                },
                fontSize: {
                    lg: '2.125rem',
                    md: '1.75rem',
                    sm: '1.6rem',
                    xs: '0.97rem'
                },
                fontWeight: '800',
                fontStyle: 'normal',
                lineHeight: {
                    sm: '2.8125rem',
                    xs: '1.5rem'
                },
                mb: '.5625rem'
            }} >{block.headline}</Typography>
            <Typography sx={{
                fontFamily: 'inherit',
                fontSize: {
                    sm: '1rem',
                    xs: '0.7rem'
                },
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '1.5625rem',
                letterSpacing: '.0156rem',
                mb: {
                    sm: '2.5625rem',
                    xs: '1.5rem'
                }
            }} variant='h3' >{block.tagline}</Typography>
            <Link
                href='#'
                className={styles.listItemLink}
                sx={{
                    fontFamily: 'inherit',
                    color: 'inherit',
                    cursor: 'pointer',
                    textDecorationLine: 'underline',
                    textDecorationColor: '#fff',
                    fontSize: {
                        sm: '1.25rem',
                        xs: '0.8rem'
                    },
                    fontStyle: 'normal',
                    fontWeight: '800',
                    lineHeight: '1.875rem',
                }}>{block.linkText}</Link>
        </ListItem>
    )
}