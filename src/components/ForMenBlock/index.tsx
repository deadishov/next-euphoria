import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import styles from './ForMenBlock.module.scss'
import arrow from '@/assets/img/forMen-arrow.svg'

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
                display: {
                    lg: 'grid',
                    xs: 'flex',
                },
                gridTemplateRows: 'repeat(2, 1fr)',
                gridTemplateColumns: 'repeat(4, 1fr)',
                alignItems: 'center',
                flexWrap: {
                    lg: 'nowrap',
                    xs: 'wrap'
                },
                width: '100%',
                margin: '0 auto',
                justifyContent: 'center'
            }}>
            {
                list.map((item) => (
                    <Box
                        key={item.image_url}
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
                        <Box className={styles.forMen__textContent}>
                            <Box>
                                <p className={styles.forMen__category}>{item.category}</p>
                                <p className={styles.forMen__text}>{item.text}</p>
                            </Box>
                            <Image src={arrow} width={20} height={14} alt="arrow" />
                        </Box>
                    </Box>
                ))
            }
        </Box>
    )
}