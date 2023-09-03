import { Button } from '@mui/base'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import arrow from '../../assets/img/arrowDown.svg'
import arrowWhite from '../../assets/img/arrowDownWhite.svg'


interface Card {
    id: string,
    image_url: string,
    headline: string,
    tagline: string,
    salesline: string
}

interface SavingZoneProps {
    list: Card[]
}

export const BigSavingZone: React.FC<SavingZoneProps> = ({ list }) => {
    return (
        <>
            <Box sx={{
                pt: '70px',
                display: {
                    xs: 'flex',
                    md: 'grid'
                },
                height: '100%',
                gridTemplateColumns: `repeat(6, 16%)`,
                gridTemplateRows: 'repeat(2, 393px)',
                gap: '10px',
                flexDirection: 'column',
                maxWidth: {
                    md: 'none',
                    xs: '80%'
                },
                m: '0 auto 100px'
            }}>
                {list.map((card, index) => (
                    <Box
                        className="card"
                        key={card.id}
                        gridColumn={index === 3 || index === 4 ? 'span 3' : 'span 2'}
                        sx={{
                            backgroundImage: `url(${card.image_url})`,
                            backgroundSize: 'cover',
                            width: '100%'
                        }}
                    >
                        <Box className="card__content">
                            {index === 1 && <Button className='card__limited-btn'>Limited Stock</Button>}
                            <Typography sx={{
                                fontFamily: 'inherit'
                            }}
                                className='card__title'>{card.headline}
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'inherit'
                            }}
                                className='card__tagline'>{card.tagline}
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'inherit'
                            }}
                                className='card__salesline'>{card.salesline}
                            </Typography>
                            <Box className="card__button-block">
                                <Image src={index === 0 || index === 1 ? arrowWhite : arrow} alt="arrow" className="card__arrow" />
                                <Button className="card__button">SHOP NOW</Button>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box className="big-poster">
                <Box className="big-card">
                    <Box className="big-card-content">
                        <h3 className="big-card-title">WE MADE YOUR EVERYDAY FASHION BETTER!</h3>
                        <p className="big-card-text">In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
                        <Button className="big-card-btn">Shop Now</Button>
                    </Box>
                </Box>
                <Box className="big-card"></Box>
            </Box>
        </>
    )
}