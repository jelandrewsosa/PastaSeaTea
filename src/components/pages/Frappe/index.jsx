import MenuCard from '../../MenuCard';
import menuItems from '../../../api/menu.json'
import NavBar from '../../NavBar';
import style from './style.module.css'

function Frappe() {
  const frappeList = menuItems.filter((elem) => elem.type === 'Frappe');

  return (

    <>
      <NavBar />
      <h1 className={style.header}>Frappe</h1>
      <div>
        {frappeList.map((frappe, index) => (
          <MenuCard key={`${frappe.name}-${index}`} name={frappe.name} price={frappe.price} image={frappe.image} typography={frappe.typography}/>
        ))}
      </div>
    </>

  );
}

export default Frappe;