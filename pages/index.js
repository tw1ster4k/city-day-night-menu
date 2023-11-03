import styles from "../styles/index.module.css"
import Image from "next/image"
import Logo from "../img/Logo.svg"
import BurgerMenuIcon from "../img/BurgerMenuIcon.svg"
import SearchIcon from "../img/SearchIcon.svg"
import Link from "next/link"
import Card from "../components/Card"
import Vk from "../img/Vk.svg"
import Inst from "../img/ints.svg"
import Phone from "../img/phone.svg"
import MapIcon from "../img/mapIcon.svg"
import Houses from "../img/Houses.png"
import { data } from "../data"
import { useState } from "react"



const index = () => {
  const classNavScrollerItem = styles.navScrollerItem + " " + styles.navScrollerItemActive
  const [goods, setGoods] = useState(data.snacks)

  return (
    <div className={styles.main}>
        <header className={styles.header}>
            <div className={styles.nav}>
                <Image className={styles.burgerMenuIcon} src={BurgerMenuIcon} />
                <Image width={50} src={Logo} className={styles.logo} />
            </div>
                <h1 className={styles.title}>Меню</h1>
        </header>
              <div className={styles.menu}>
                <div className={styles.search}>
                  <input className={styles.input} placeholder="Поиск по меню" />
                  <Image src={SearchIcon} className={styles.searchIcon} />
                </div>
                <div className={styles.navScroller}>
                  <nav className={styles.navScrollerItems}>
                      <p className={classNavScrollerItem} onClick={() => setGoods(data.snacks)}>Закуски</p>
                      <p className={classNavScrollerItem} onClick={() => setGoods(data.salads)}>Салаты</p>
                      <p className={classNavScrollerItem} onClick={() => setGoods(data.soups)}>Супы</p>
                      <p className={classNavScrollerItem} onClick={() => setGoods(data.pasta)}>Пасты</p>
                      <p className={classNavScrollerItem} onClick={() => setGoods(data.meat)}>Мясо</p>
                      <p className={classNavScrollerItem} onClick={() => setGoods(data.fish)}>Рыба</p>
                      <p className={classNavScrollerItem} onClick={() => setGoods(data.trimmings)}>Гарниры</p>
                      <p className={classNavScrollerItem} onClick={() => setGoods(data.burgers)}>Бургеры</p>
                      <p className={classNavScrollerItem} onClick={() => setGoods(data.rolls)}>Роллы</p>
                      <p className={classNavScrollerItem} onClick={() => setGoods(data.dessert)}>Десерты</p>  
                  </nav>
                </div>
                      <div className={styles.goods}>
                        {
                          goods.map((el, index) => 
                            <Card key={index} name={el.name} description={el.description} weidth={el.weight} price={el.price} />
                          )
                        }
                      </div>
                      <div className={styles.info}>
                          <p>© 2023 Рестобар «City»</p>
                          <div className={styles.link} >
                           <Link href="https://vk.com/city_orb">
                            <Image src={Vk} />
                           </Link>   
                           <Link href="https://instagram.com/city_day_night?igshid=MzMyNGUyNmU2YQ==">
                            <Image src={Inst} />
                           </Link> 
                              <Image src={Phone} />
                              <Image src={MapIcon} />
                          </div>
                          <p style={{fontSize:"10px", lineHeight:"12px", color:"#fff"}}>Разработано веб-студией "Страйкер"</p>
                      </div>
                    <Image style={{marginTop:"40px", marginBottom:"8px", width: "100%",}} src={Houses} />
              </div>
    </div>
  )
}

export default index