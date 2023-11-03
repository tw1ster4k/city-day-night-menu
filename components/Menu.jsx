import React from 'react'
import style from "../styles/menu.module.css"

const Menu = ({headers, items}) => {
  return (
    <div>
        <div>
            <div>
                {headers}
            </div>
            <ul>
                {items.map((el) => 
                <li key={el}>{el}</li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Menu