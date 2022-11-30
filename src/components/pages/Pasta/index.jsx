import MenuCard from '../../MenuCard';
import menuItems from '../../../api/menu.json'
import NavBar from '../../../components/NavBar';
import style from './style.module.css'

function Pasta() {
  const pastaList = menuItems.filter((elem) => elem.type === 'Pasta');

  return (

    <>
      <NavBar />
      <h1 className={style.header}>Pasta</h1>
      <div>
        {pastaList.map((pasta, index) => (
          <MenuCard key={`${pasta.name}-${index}`} name={pasta.name} price={pasta.price} image={pasta.image} typography={pasta.typography}/>
        ))}
      </div>
    </>
  );
}

export default Pasta;