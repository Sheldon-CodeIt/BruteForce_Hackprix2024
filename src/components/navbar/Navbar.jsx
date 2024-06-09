import Image from 'next/image';
import React from 'react';
import styles from "./navbar.module.css";
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.social}> 
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
      </div> */}
      <div className={styles.logo}>
        <img
          src="/Logo_maker_project-removebg-preview.png"
          alt="Logo"
          className="h-10 w-10 mr-2"
        />
        <span className="font-bold text-2xl"><Link href="/">pathpro.ai</Link></span>
      </div>
        <div className={styles.links}>
          <Link href="/roadmap" className={styles.link}>Roadmap</Link>
          <Link href="/quiz" className={styles.link}>Quiz</Link>
          <Link href="/about" className={styles.link}>Trends</Link>
          <Link href="/about" className={styles.link}>About</Link>
        </div>
      <ThemeToggle/>
      <AuthLinks/>
    </div>
  )
}

export default Navbar