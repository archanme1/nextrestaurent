import React from 'react'
import Image from 'next/image'
import styles from  '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout='fill' objectFit='contain' alt=''/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          NOBODY DOES IT BETTER!
          WELCOME TO ARCHAN&apos;S PIZZA HUB..........
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            FIND OUR RESTAURENT
          </h1>
          <p className={styles.text}>
            4565, Pemmican Trial,
            <br /> Mississauga, Canada.
            <br /> +1 6478705029
          </p>
          <p className={styles.text}>
            4565, Pemmican Trial,
            <br /> Mississauga, Canada.
            <br /> +1 6478705029
          </p>
          <p className={styles.text}>
            4565, Pemmican Trial,
            <br /> Mississauga, Canada.
            <br /> +1 6478705029
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
              WORKING HOURS
          </h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11:00 - 16:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer