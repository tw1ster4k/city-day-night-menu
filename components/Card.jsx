import styles from "../styles/card.module.css"
import stylesModal from "../styles/cardModal.module.css"
import Good from "../img/Good.png"
import Image from "next/image"
import Cross from "../img/cross.svg"
import {useState} from "react"

const Card = ({name, description, weidth, price}) => {
  const [modal, setModal] = useState(false)
  return (
    <div onClick={() => setModal(!modal)} className={modal ? stylesModal.card : styles.card}>
      {
        modal ?
        <Image className={stylesModal.cross} src={Cross} onClick={() => setModal(false)} />
        :
        ""
      }
        <Image className={modal ? stylesModal.img : styles.img} src={Good} />
        <p className={modal ? stylesModal.title : styles.title}>{name}</p>
        {
          modal ?
          <p className={stylesModal.description}>{description}</p>
          :
          ""
        }
        <div className={modal ? stylesModal.price : styles.price}>
            <p className={modal ? stylesModal.priceItem : styles.priceItem}>{weidth}</p>
            <p className={modal ? stylesModal.priceItem : styles.priceItem}>{price} руб.</p>
        </div>
    </div>
  )
}

export default Card