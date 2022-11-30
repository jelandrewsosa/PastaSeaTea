import MenuCard from '../../MenuCard';
import menuItems from '../../../api/menu.json'
import NavBar from '../../../components/NavBar';
import style from './style.module.css'

function Drinks() {
  const drinksList = menuItems.filter((elem) => elem.type === 'Drink');

  return (

    <>
      <NavBar />
      <h1 className={style.header}>Drinks</h1>
      <div>
        {drinksList.map((drinks, index) => (
          <MenuCard key={`${drinks.name}-${index}`} name={drinks.name} price={drinks.price} image={drinks.image} typography={drinks.typography}/>
        ))}
      </div>
    </>
  );
}

export default Drinks;