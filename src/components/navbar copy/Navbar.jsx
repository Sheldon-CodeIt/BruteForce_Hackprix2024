import Image from 'next/image';
import React from 'react';
import styles from "./navbar.module.css";
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}> 
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
      </div>
      <div className={styles.logo}>BloomBrain.ai</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/roadmap" className={styles.link}>Roadmap</Link>
        <Link href="/quiz" className={styles.link}>quiz</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar