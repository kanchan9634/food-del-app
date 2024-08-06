import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
     <h1>Explore our menu</h1> 
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum rem odio harum quisquam aliquam veritatis perspiciatis quas, similique magnam illum, sequi ex autem. Sapiente labore dignissimos ratione repellat suscipit! Accusamus?</p>
     <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
             return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                     <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                     <p>{item.menu_name}</p>
                     </div>
            );


        })}
     </div>
    </div>
  )
}

export default ExploreMenu

