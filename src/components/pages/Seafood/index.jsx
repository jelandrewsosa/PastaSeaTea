import MenuCard from '../../MenuCard';
import menuItems from '../../../api/menu.json'
import NavBar from '../../../components/NavBar';
import style from './style.module.css'

function Seafood() {
  const seafoodList = menuItems.filter((elem) => elem.type === 'Seafood');

  return (

    <>
      <NavBar />
      <h1 className={style.header}>Seafood</h1>
      <div>
        {seafoodList.map((seafood, index) => (
          <MenuCard key={`${seafood.name}-${index}`} name={seafood.name} price={seafood.price} image={seafood.image} typography={seafood.typography}/>
        ))}
      </div>
    </>
  );
}

export default Seafood;