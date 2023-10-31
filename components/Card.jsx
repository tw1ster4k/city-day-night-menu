import styles from "../styles/card.module.css"
import stylesModal from "../styles/cardModal.module.css"
import Good from "../img/Good.png"
import Image from "next/image"
import {useState} from "react"

const Card = () => {
  const [modal, setModal] = useState(false)
  return (
    <div onClick={() => setModal(!modal)} className={modal ? stylesModal.card : styles.card}>
        <Image className={modal ? stylesModal.img : styles.img} src={Good} />
        <p className={modal ? stylesModal.title : styles.title}>Basil Red D.</p>
        {
          modal ?
          <p className={stylesModal.description}>Состав: Джим, лайм, базилик, сах. сироп, лемонграсс </p>
          :
          ""
        }
        <div className={modal ? stylesModal.price : styles.price}>
            <p className={modal ? stylesModal.priceItem : styles.priceItem}>350 мл</p>
            <p className={modal ? stylesModal.priceItem : styles.priceItem}>450 руб.</p>
        </div>
    </div>
  )
}

export default Card