import styles from "../styles/card.module.css"
import Good from "../img/Good.png"
import Image from "next/image"

const Card = () => {
  return (
    <div className={styles.card}>
        <Image className={styles.img} src={Good} />
        <text className={styles.title}>Basil Red D.</text>
        <div className={styles.price}>
            <text className={styles.priceItem}>350 мл</text>
            <text className={styles.priceItem}>450 руб.</text>
        </div>
    </div>
  )
}

export default Card