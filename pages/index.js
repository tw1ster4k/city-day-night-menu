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
  const [selected, setSelected] = useState("Закуски")

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
                    <p className={classNavScrollerItem} style={ selected === "Закуски" ? {borderBottom:1 + "px solid #fff"} : {}} onClick={() => {setGoods(data.snacks); setSelected("Закуски")}}>Закуски</p>
                      <p className={classNavScrollerItem} style={ selected === "Салаты" ? {borderBottom:1 + "px solid #fff"} : {}} onClick={() => {setGoods(data.salads); setSelected('Салаты')}}>Салаты</p>
                      <p className={classNavScrollerItem} style={ selected === "Супы" ? {borderBottom:1 + "px solid #fff"} : {}} onClick={() => {setGoods(data.soups); setSelected("Супы")}}>Супы</p>
                      <p className={classNavScrollerItem} style={ selected === "Пасты" ? {borderBottom:1 + "px solid #fff"} : {}} onClick={() => {setGoods(data.pasta); setSelected("Пасты")}}>Пасты</p>
                      <p className={classNavScrollerItem} style={ selected === "Мясо" ? {borderBottom:1 + "px solid #fff"} : {}} onClick={() => {setGoods(data.meat); setSelected('Мясо')}}>Мясо</p>
                      <p className={classNavScrollerItem} style={ selected === "Рыба" ? {borderBottom:1 + "px solid #fff"} : {}} onClick={() => {setGoods(data.fish); setSelected("Рыба")}}>Рыба</p>
                      <p className={classNavScrollerItem} style={ selected === "Гарниры" ? {borderBottom:1 + "px solid #fff"} : {}} onClick={() => {setGoods(data.trimmings); setSelected("Гарниры")}}>Гарниры</p>
                      <p className={classNavScrollerItem} style={ selected === "Бургеры" ? {borderBottom:1 + "px solid #fff"} :{}} onClick={() => {setGoods(data.burgers); setSelected("Бургеры")}}>Бургеры</p>
                      <p className={classNavScrollerItem} style={ selected === "Роллы" ? {borderBottom:1 + "px solid #fff"} : {}} onClick={() => {setGoods(data.rolls); setSelected("Роллы")}}>Роллы</p>
                      <p className={classNavScrollerItem} style={ selected === "Десерты" ? {borderBottom:1 +"px solid #fff"} : {}} onClick={() => {setGoods(data.dessert); setSelected("Десерты")}}>Десерты</p>  
                  </nav>
                </div>
                      <div className={styles.goods}>
                        {
                          goods.map((el, index) => 
                            <Card key={index} name={el.name} description={el.description} Img={el.img} weidth={el.weight} price={el.price} />
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