import NavBar from './components/NavBar';
import About from './components/pages/About';
import './App.css';

function App() {

  return (

    <>
      <NavBar />
      <div className='homeBg'>
      </div>
      <div className='about'>
        <About />
      </div>
    </>
  );
}

export default App;
