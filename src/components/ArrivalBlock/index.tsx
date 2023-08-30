"use client";

import { Box, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import styles from './ArrivalBlock.module.scss'
import arrowLeft from '../../assets/img/arrivalLeft.svg'
import arrowRight from '../../assets/img/arrivalRight.svg'
import Image from 'next/image';


import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

interface Slide {
    id: string,
    image_url: string,
    title: string
}

interface ArrivalBlockProps {
    list: Slide[]
}

export const ArrivalBlock: React.FC<ArrivalBlockProps> = ({ list }) => {
    const swiperRef = useRef<SwiperType>();


    const slideNext = () => {
        swiperRef.current?.slideNext()
    }

    const slidePrev = () => {
        swiperRef.current?.slidePrev()
    }

    return (
        <div
            className={styles.sliderWrapper}
        >
            <Container >
                <Swiper
                    className={styles.slider}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    slidesPerView={4}
                    spaceBetween={0}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        700: {
                            slidesPerView: 2,
                        },
                        1000: {
                            slidesPerView: 3,
                        },
                        1370: {
                            slidesPerView: 4
                        }
                    }}
                >
                    {list.map((slide) => (
                        <SwiperSlide
                            key={slide.id}
                            className={styles.slide}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '33px', alignItems: 'center' }}>
                                <CardMedia
                                    className={styles.slideImage}
                                    component='img'
                                    sx={{
                                        width: {
                                            md: '16.375rem',
                                            sm: '14rem',
                                            xs: '12.375rem',
                                        },
                                        height: {
                                            md: '16.375rem',
                                            sm: '14rem',
                                            xs: '12.375rem',
                                        },
                                        borderRadius: '.75rem'
                                    }}
                                    image={slide.image_url}
                                />
                                <Typography className={styles.slideTitle}>{slide.title}</Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
            <div className={styles.sliderNav}>
                <Image
                    className={styles.arrowLeft}
                    src={arrowLeft}
                    onClick={slidePrev}
                    alt='arrow'
                />
                <Image
                    className={styles.arrowRight}
                    src={arrowRight}
                    onClick={slideNext}
                    alt='arrow'
                />
            </div>
        </div>
    )
}

