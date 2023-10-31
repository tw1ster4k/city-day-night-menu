import styles from "../styles/index.module.css"
import Image from "next/image"
import Logo from "../img/Logo.svg"
import BurgerMenuIcon from "../img/BurgerMenuIcon.svg"
import SearchIcon from "../img/SearchIcon.svg"
import Link from "next/link"
import Card from "../components/Card"
import Vk from "../img/Vk.svg"
import Tg from "../img/tg.svg"
import Phone from "../img/phone.svg"
import MapIcon from "../img/mapIcon.svg"
import Houses from "../img/Houses.png"


const index = () => {
  const classNavScrollerItem = styles.navScrollerItem + " " + styles.navScrollerItemActive
  return (
    <div className={styles.main}>
        <header className={styles.header}>
            <div className={styles.nav}>
                <Image className={styles.burgerMenuIcon} src={BurgerMenuIcon} />
                <Image src={Logo} className={styles.logo} />
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
                      <Link className={classNavScrollerItem} href={"/"}>Коктейли</Link>
                      <Link className={classNavScrollerItem} href={"/"}>Напитки</Link>
                      <Link className={classNavScrollerItem} href={"/"}>Закуски</Link>
                      <Link className={classNavScrollerItem} href={"/"}>Салаты</Link>
                      <Link className={classNavScrollerItem} href={"/"}>Супы</Link>
                      <Link className={classNavScrollerItem} href={"/"}>Пасты</Link>
                      <Link className={classNavScrollerItem} href={"/"}>Мясо/Рыба</Link>
                      <Link className={classNavScrollerItem} href={"/"}>Бургеры</Link>
                      <Link className={classNavScrollerItem} href={"/"}>Гарниры</Link>
                      <Link className={classNavScrollerItem} href={"/"}>Десерты</Link>  
                  </nav>
                </div>
                  <div className={styles.preCategory}>
                      <text className={styles.categoryTitle}>Коктейли</text>
                      <div className={styles.categoryTypes}>
                        <text className={styles.categoryType} >Авторские</text>
                        <text className={styles.categoryType}>Классические</text>
                        <text className={styles.categoryType}>Дымные</text>
                      </div>
                      <div className={styles.goods}>
                          <Card />
                          <Card />
                          <Card />
                          <Card />
                          <Card />
                          <Card />
                      </div>
                      <div className={styles.info}>
                          <p>© 2023 Рестобар «City»</p>
                          <div className={styles.link} >
                              <Image src={Vk} />
                              <Image src={Tg} />
                              <Image src={Phone} />
                              <Image src={MapIcon} />
                          </div>
                          <p style={{fontSize:"10px", lineHeight:"12px", color:"#fff"}}>Разработано веб-студией "Страйкер"</p>
                      </div>
                      <Image style={{marginTop:"40px", marginBottom:"8px"}} src={Houses} />
                  </div>
              </div>
    </div>
  )
}

export default index