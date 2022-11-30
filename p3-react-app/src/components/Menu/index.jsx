import style from './style.module.css';
import MenuCard from '../MenuCard';
import menuItems from '../../api/menu.json'
import NavBar from '../NavBar'

function Menu() {

  return (

    <>
      <NavBar />
      <h1 className={style.header}>Menu</h1>
      <div className={style.menu}>
        {menuItems.map((menuItem, index) => (
          <MenuCard key={`${menuItem.name}-${index}`} name={menuItem.name} price={menuItem.price} type={menuItem.type} image={menuItem.image} typography={menuItem.typography}/>
        ))}
      </div>
    </>
  );
}

export default Menu;