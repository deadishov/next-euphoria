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
        <Box sx={{
            pt: '70px',
            pb: '100px',
            display: 'grid',
            gridTemplateColumns: `repeat(6, 16%)`,
            gridTemplateRows: 'repeat(2, 393px)',
            gap: '10px',
        }}>
            {list.map((card, index) => (
                <Box
                    className="card"
                    key={card.id}
                    gridColumn={index === 3 || index === 4 ? 'span 3' : 'span 2'}
                    sx={{
                        backgroundImage: `url(${card.image_url})`,
                        backgroundSize: 'cover'
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
    )
}