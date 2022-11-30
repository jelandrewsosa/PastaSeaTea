import style from './style.module.css'
import NavBar from '../../../components/NavBar';

function Contact() {
  return (
    <>
      <NavBar />
      <div className={style.about}>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim fugit quae similique dolorum culpa, natus dolores commodi eos beatae rem quas amet atque consequatur ipsam qui? Vitae, itaque placeat.</p>
      </div>
    </>
  );
}

export default Contact;