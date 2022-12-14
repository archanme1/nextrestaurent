import Image from 'next/image'
import React from 'react'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/pizza.png" alt='' width="500" height="500" />
        <h1 className={styles.title}>Bhattey special pizza</h1>
        <span className={styles.price}>$99.00</span>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, necessitatibus? Beatae saepe recusandae quis.</p>
    </div>
  )
}

export default PizzaCard