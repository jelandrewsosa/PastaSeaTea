import MenuCard from '../../MenuCard';
import menuItems from '../../../api/menu.json'
import NavBar from '../../../components/NavBar';
import style from './style.module.css'

function Tea() {
  const teaList = menuItems.filter((elem) => elem.type === 'Tea');

  return (

    <>
      <NavBar />
      <h1 className={style.header}>Tea</h1>
      <div>
        {teaList.map((tea, index) => (
          <MenuCard key={`${tea.name}-${index}`} name={tea.name} price={tea.price} image={tea.image} typography={tea.typography}/>
        ))}
      </div>
    </>
  );
}

export default Tea;