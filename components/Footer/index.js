import React from 'react';
import Image from 'next/image'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
       <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; 2021. All rights reserved. Do what you want with it
          <span className={styles.logo}>
            <Image src="/wiz.svg" alt="Vercel Logo" width={130} height={40} />
          </span>
        </a>
    </footer>
  )
}

export default Footer;
