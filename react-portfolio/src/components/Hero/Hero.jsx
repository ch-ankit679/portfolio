import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
        Hi, I'm Ankit Choudhary
        </h1>
        <p className={styles.description}>
        I'm a Pre-Final Year student of Maulana Azad National Institute of Technology. I am currently pursuing my Bachelors in Computer Science Engineering.
        </p>
        <a href='mailto:ch.ankit679@gmail.com' className={styles.contactBtn} target='_blank'>Contact Me</a>
      </div>
      <img src={getImageUrl('hero/heroImage.png')} alt='Hero image of me' className={styles.heroImg}/>
      <div className={styles.topblur}/>
      <div className={styles.bottomblur}/>
    </section>
  )
}
