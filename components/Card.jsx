import styles from "../styles/card.module.css"
import Good from "../img/Good.png"
import Image from "next/image"

const Card = () => {
  return (
    <div className={styles.card}>
        <Image className={styles.img} src={Good} />
        <p className={styles.title}>Basil Red D.</p>
        <div className={styles.price}>
            <p className={styles.priceItem}>350 мл</p>
            <p className={styles.priceItem}>450 руб.</p>
        </div>
    </div>
  )
}

export default Card