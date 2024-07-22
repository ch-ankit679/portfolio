import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt='Email-icon' />
          <a href="mailto:ch.ankit679@gmail.com" target='_blank'>ch.ankit679@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn-icon' />
          <a href="https://www.linkedin.com/in/ankit-choudhary-62bb87256/" target='_blank'>linkedin.com/ankit-choudhary</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt='github-icon' />
          <a href="https://github.com/ch-ankit679" target='_blank'>github.com/ch-ankit679</a>
        </li>
      </ul>
    </footer>
  )
}
