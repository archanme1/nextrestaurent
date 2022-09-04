import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/Product.module.css'

const Product = () => {

    const [size, setSize] = useState(0)

    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CpArc Sausage",
        price: [39.9, 53.7, 75.4],
        desc: "This is the best pizza that is avaiable special made by chef Archan. A Typical Nepali cuisine."
    }

  return (
    <div className={styles.container}> 
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} objectFit="contain" layout='fill' alt=''/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>${pizza.price[size]}</span>
            <p className={styles.desc}>{pizza .desc}</p>
            <h3 className={styles.choose}>Choose your pizza size</h3>
            <div className={styles.sizes}>
                <div className={styles.size}>
                    <Image src="/img/size.png"  alt='' layout='fill' onClick={()=> setSize(0)} />
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size}>
                    <Image src="/img/size.png"  alt='' layout='fill' onClick={()=> setSize(1)} />
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size}>
                    <Image src="/img/size.png"  alt='' layout='fill' onClick={()=> setSize(2)} />
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingrdients</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input className={styles.checkbox} type="checkbox" id="double" name='double'/>
                    <label className={styles.label} htmlFor="double">Double Ingrediants</label>
                </div>
                <div className={styles.option}>
                    <input className={styles.checkbox} type="checkbox" id="cheese" name='cheese'/>
                    <label className={styles.label} htmlFor="cheese">Extra Cheese</label>
                </div>
                <div className={styles.option}>
                    <input className={styles.checkbox} type="checkbox" id="spicy" name='spicy'/>
                    <label className={styles.label} htmlFor="spicy">Spicy Sauce</label>
                </div>
                <div className={styles.option}>
                    <input className={styles.checkbox} type="checkbox" id="garlix" name='garlix'/>
                    <label className={styles.label} htmlFor="garlix">Garlic Sauce</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number"  defaultValue={1} className={styles.quantity} />
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product