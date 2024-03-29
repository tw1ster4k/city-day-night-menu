import styles from "../styles/card.module.css"
import stylesModal from "../styles/cardModal.module.css"
import Good from "../img/Good.png"
import Image from "next/image"
import Cross from "../img/cross.svg"
import {useState} from "react"

const Card = ({name, description, Img, weidth, price}) => {
  const [modal, setModal] = useState(false)
  return (
    <div onClick={() => setModal(!modal)} className={modal ? stylesModal.card : styles.card}>
      {
        modal ?
        <Image className={stylesModal.cross} alt="image" src={Cross} onClick={() => setModal(false)} />
        :
        ""
      }
        <Image className={modal ? stylesModal.img : styles.img} alt="dsdsdsd" src={Img ? Img : Good} />
        <p className={modal ? stylesModal.title : styles.title} style={ name.length > 80 ? {fontSize:"9px", lineHeight:"10px"} : {}}>{name}</p>
        {
          modal ?
          <p className={stylesModal.description}>{description}</p>
          :
          ""
        }
        <div className={modal ? stylesModal.price : styles.price}>
            <p className={modal ? stylesModal.priceItem : styles.priceItem} style={{marginRight:20}}>{weidth}</p>
            <p className={modal ? stylesModal.priceItem : styles.priceItem}>{price}руб</p>
        </div>
    </div>
  )
}

export default Card