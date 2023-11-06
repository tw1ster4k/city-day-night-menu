import React from 'react'
import style from "../styles/menu.module.css"
import strelka from "../img/strelka.svg"
import Krest from "../img/Krest.svg"
import Image from 'next/image'
import { useState } from 'react'
import { data } from '../data'
import { bar } from '../bar'

const Menu = ({setActiveMenu,setSelected, setGoods}) => {
  const [items, setItems] = useState(null)
  const windowWidth = window.innerWidth
  const menu = [data.snacks, data.salads, data.soups, data.pasta, data.meat, data.fish, data.trimmings, data.burgers, data.rolls, data.dessert]
  const barCard = [bar.coctail, bar.whiskey, bar.rum, bar.lbt, bar.vermouths, bar.CongacBrandy, bar.geneva, bar.vodka, bar.tequila, bar.sparklingWine, bar.quietWines, bar.refreshments, bar.beer, bar.lemonade, bar.smoothie, bar.fresh, bar.tea,bar.coffee]
  const items1 = ['Закуски', 'Салаты', 'Супы', "Пасты", "Мясо", "Рыба", "Гарниры", "Бургеры", "Роллы", "Десерты"]
  const items2 = ["Коктейли", "Виски", "Ром","Ликеры/Биттеры/Настойки" ,"Вермуты", "Коньяк и Бренди", "Джин", "Водка", "Текила", "Игристые вина", "Тихие вина",'Прохладительные напитки' ,"Пиво", "Лимонад", "Смузи", "Фреши", "Чай", "Кофе"]
  return (
      <div className={style.menu} style={windowWidth > 375 ? {width:375} : {width:"100%"}}>
        <Image onClick={() => setActiveMenu(false)} style={{position:'absolute', left:15, top:15}} src={Krest} />
      <div className={style.menu__content}>
        <div >
          <div onClick={() => setItems(items && items.length === items1.length ? null : items1)} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <Image style={{marginRight:'5px'}} src={strelka} />
          <p style={items && items.length === items1.length ? {borderBottom:1 + "px solid #fff"} : {}}>
          Меню
          </p>
        </div> 
       <ul className={style.list}>
        {items && items.length === items1.length && items.map((el, index) => 
          <li onClick={() => {setGoods(menu[index]); setSelected(el) }} style={{marginLeft:15, marginTop:10}} key={index}>{el}</li>
          )}
          </ul>
          </div>
        </div>
        <div className={style.menu__content}>
        <div>
          <div onClick={() => setItems(items && items.length === items2.length ? null : items2)} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <Image style={{marginRight:'5px'}} src={strelka} />
          <p style={items && items.length === items2.length ? {borderBottom:1 + "px solid #fff"} : {}}>
            Барная карта
          </p>
        </div> 
       <ul className={style.list}>
        {items && items.length === items2.length && items.map((el, index) => 
          <li onClick={() => setGoods(barCard[index])} style={{marginLeft:15, marginTop:10}} key={index}>{el}</li>
          )}
          </ul>
          </div>
        </div>
        </div>
      ) 
  }

export default Menu