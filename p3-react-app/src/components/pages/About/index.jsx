import style from './style.module.css'
import NavBar from '../../../components/NavBar';

function About() {
  return (
    <>
      <NavBar />
      <div className={style.about}>
        <div className={style.ourStories}>
        </div>
        <div className={style.chef}>
          <img src='https://cdnimg.webstaurantstore.com/uploads/blog/2021/2/concentrated-female-chef-garnishing-food-in-kitchen2.jpg'/>
        </div>
        <div className={style.story}>
          <h1>Our Stories</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim fugit quae similique dolorum culpa, natus dolores commodi eos beatae rem quas amet atque consequatur ipsam qui? Vitae, itaque placeat.</p>
        </div>
      </div>
    </>
  );
}

export default About;