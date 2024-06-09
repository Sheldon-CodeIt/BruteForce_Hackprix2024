"use client"

import React from 'react'
import styles from "./home.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import Hero from '@/components/hero/Hero';
import Beginner from '@/components/beginner/Beginner';
import More from '@/components/more/More';


const page = () => {
  return (
    <div className={styles.container}>
      <Hero/>
      <Beginner/>
      <More/>
    </div>
  )
}

export default page
