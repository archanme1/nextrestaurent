import Image from 'next/image'
import React from 'react'
import styles from "../styles/Cart.module.css"

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tr className={styles.tr}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.png" alt='' layout='fill' objectFit='contain' />
                        </div>
                    </td>
                    <td>
                       <span className={styles.name}>Bhattey CLub Pizza</span>
                    </td>
                    <td>
                       <span className={styles.extras}>Double Ingrdient, Spicy sause</span>
                    </td>
                    <td>
                       <span className={styles.Price}>$40.98</span>
                    </td>
                    <td>
                       <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                       <span className={styles.total}>$45.00</span>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.png" alt='' layout='fill' objectFit='contain' />
                        </div>
                    </td>
                    <td>
                       <span className={styles.name}>Bhattey CLub Pizza</span>
                    </td>
                    <td>
                       <span className={styles.extras}>Double Ingrdient, Spicy sause</span>
                    </td>
                    <td>
                       <span className={styles.Price}>$40.98</span>
                    </td>
                    <td>
                       <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                       <span className={styles.total}>$45.00</span>
                    </td>
                </tr>
            </table>
        </div>
        <div className={styles.right}>
             <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>
                    $110.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>
                    $0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>
                    $110.00
                </div>
                <button className={styles.button}>CHECKOUT NOW</button>
             </div>
        </div>
    </div>
  )
}

export default Cart