import { Container } from '@mui/material'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { MainSliderProps } from '../MainSlider'
import styles from './MainSliderList.module.scss'

export const MainSliderList: React.FC<MainSliderProps> = ({ list }) => {
    return (
        <>
            {list.map((slide) => (
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    className={styles.slide}
                    key={slide.id}>
                    <Container
                        className={styles.slideContent}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '40px',
                            maxWidth: {
                                xl: '1200px',
                                lg: '1000px',
                                md: '760px',
                                sm: '630px'
                            }
                        }}>
                        {slide?.category && <h3 className={styles.slideTitle}>{slide.category}</h3>}
                        <h1 className={styles.slideHeadline}>{slide.headline}</h1 >
                        {slide?.tagline && <h3 className={styles.slideTitle}>{slide.tagline}</h3>}
                        <div>
                            {slide.buttonText && <button className={styles.slideButton}>{slide.buttonText}</button>}
                        </div>
                    </Container>
                </SwiperSlide>
            ))}
        </>
    )
}