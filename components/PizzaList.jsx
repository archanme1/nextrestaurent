import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST NEPALI PIZZA IN TOWN</h1>
        <p className={styles.desc}>This slightly spicy pizza is loaded with flavors from the cuisine of Nepal. Chef Archan was the first Eat Offbeat chef. Chatamari is a special Nepalese dish that is also called Nepali Pizza. It looks similar to a pizza, but it is more like a cross between pizza and a savory crepe.
        </p>
        <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>
    </div>
  )
}

export default PizzaList