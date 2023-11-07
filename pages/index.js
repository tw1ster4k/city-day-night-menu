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
import Menu from "../components/Menu"
import { data } from "../data"
import { bar } from "../bar"
import { useState } from "react"



const index = () => {
  const items1 = ['Закуски', 'Салаты', 'Супы', "Пасты", "Мясо", "Рыба", "Гарниры", "Бургеры", "Роллы", "Десерты"]
  const items2 = ["Коктейли", "Виски", "Ром","Ликеры/Биттеры/Настойки" ,"Вермуты", "Коньяк и Бренди", "Джин", "Водка", "Текила", "Игристые вина", "Тихие вина",'Прохладительные напитки' ,"Пиво", "Лимонад", "Смузи", "Фреши", "Чай", "Кофе"]
  const menu = [data.snacks, data.salads, data.soups, data.pasta, data.meat, data.fish, data.trimmings, data.burgers, data.rolls, data.dessert]
  const barCard = [bar.coctail, bar.whiskey, bar.rum, bar.lbt, bar.vermouths, bar.CongacBrandy, bar.geneva, bar.vodka, bar.tequila, bar.sparklingWine, bar.quietWines, bar.refreshments, bar.beer, bar.lemonade, bar.smoothie, bar.fresh, bar.tea,bar.coffee]
  const classNavScrollerItem = styles.navScrollerItem + " " + styles.navScrollerItemActive
  const [goods, setGoods] = useState(data.snacks)
  const [storage, setStorage] = useState(menu)
  const [items, setItems] = useState(items1)
  const [selected, setSelected] = useState("Закуски")
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <div className={styles.main}>
        <header className={styles.header}>
            <div className={styles.nav}>
                <Image onClick={() => setActiveMenu(!activeMenu)} className={styles.burgerMenuIcon} src={BurgerMenuIcon} />
                <Image width={50} src={Logo} className={styles.logo} />
            </div>
                <h1 className={styles.title}>Меню</h1>
        </header>
              <div className={styles.menu}>
                <div className={styles.search}>
                  <input className={styles.input} placeholder="Поиск по меню" />
                  <Image src={SearchIcon}  className={styles.searchIcon} />
                </div>
                <div className={styles.buttonNav}>
                  <button onClick={() => {setItems(items1); setStorage(menu)}} style={items.length === items1.length ? {background:"#f3f3f3", color:"#02253f"} : {}} className={styles.buttonMenu}>Меню</button>
                  <button onClick={() => {setItems(items2); setStorage(barCard)}} style={items.length === items2.length ? {background:"#f3f3f3", color:"#02253f"} : {}} className={styles.buttonBar}>Барная карта</button>
                </div>
                <div className={styles.navScroller}>
                  <nav className={styles.navScrollerItems}>
                    {
                      items.map((el, index)  =>
                      <p key={index} className={classNavScrollerItem} style={ selected === el ? {borderBottom:1 + "px solid #fff"} : {}} onClick={() => {setGoods(storage[index]); setSelected(el)}}>{el}</p>
                      )
                    }
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
              {
                activeMenu ?
                <Menu setActiveMenu={setActiveMenu} setSelected={setSelected} setGoods={setGoods} />
                :
                ""
              }
    </div>
  )
}

export default index