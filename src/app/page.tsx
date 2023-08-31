import React from 'react';
import { Header } from '../components/Header';
import { MainSlider } from '../components/MainSlider';
import slidesArr from '../data/slidesArr.json';
import promoArr from '../data/promo.json';
import arrivalArr from '../data/arrival.json';
import savingZoneArr from '../data/savingZone.json'
import { PromoBlock } from '../components/PromoBlock';
import { Container, List } from '@mui/material';
import { ArrivalBlock } from '../components/ArrivalBlock';
import { BigSavingZone } from '../components/BigSavingZone';
import styles from './page.module.scss'
import '../scss/app.scss'

export default function Home() {
  const filtredArr = slidesArr.filter(slide => slide.id < '6')

  return (
    <>
      <Header />
      <MainSlider list={filtredArr} />
      <Container>
        <List sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: {
            md: 'row',
            sm: 'column',
            xs: 'column'
          },
          gap: '30px',
          pt: {
            sm: '8.125rem',
            xs: '4.0625rem'
          },
          pb: {
            sm: '100px',
            xs: '50px'
          },
        }}>
          {promoArr.map((block) => (
            <PromoBlock key={block.image_url} block={block} />
          ))}
        </List>
        <h3 className={styles.sectionTitle}>
          New Arrival
        </h3>
      </Container>
      <ArrivalBlock list={arrivalArr} />
      <Container>
        <h3 className={styles.sectionTitle}>
          Big Saving Zone
        </h3>
        <BigSavingZone list={savingZoneArr} />
      </Container>
    </>
  )
}
