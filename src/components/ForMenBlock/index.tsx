import { Box } from '@mui/system'
import React from 'react'
import Image from 'next/image'
import styles from './ForMenBlock.module.scss'
import { Typography } from '@mui/material'

interface ListItem {
    image_url: string,
    category: string,
    text: string
}

interface ForMenBlockProps {
    list: ListItem[]
}

export const ForMenBlock: React.FC<ForMenBlockProps> = ({ list }) => {
    return (
        <Box
            className={styles.forMen}
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                width: '100%',
                margin: '0 auto'
            }}>
            {
                list.map((item) => (
                    <Box
                        className={styles.forMen__card}
                        sx={{
                            height: '393px'
                        }}>
                        <Image
                            className={styles.forMen__image}
                            width={270}
                            height={393}
                            src={item.image_url}
                            alt="categoty-image" />
                        <p className={styles.forMen__category}>{item.category}</p>
                        <p className={styles.forMen__text}>{item.text}</p>
                    </Box>
                ))
            }
        </Box>
    )
}