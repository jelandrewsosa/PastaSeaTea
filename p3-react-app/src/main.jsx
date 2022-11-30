import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route, HashRouter } from 'react-router-dom';import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './components/Menu'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Pasta from './components/pages/Pasta'
import Seafood from './components/pages/Seafood'
import Tea from './components/pages/Tea'
import Drinks from './components/pages/Drinks'
import Frappe from './components/pages/Frappe'
import NotFoundView from './NotFoundView'
import PastaSeateaContextComponent from './OrderContext';
import MyOrdersListView from '../src/components/MyOrdersListView'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PastaSeateaContextComponent>
      <BrowserRouter basename='/PastaSeaTea/'>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/*" element={<NotFoundView />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/pasta" element={<Pasta />}/>
          <Route path="/seafood" element={<Seafood />}/>
          <Route path="/tea" element={<Tea />}/>
          <Route path="/frappe" element={<Frappe />}/>
          <Route path="/drinks" element={<Drinks />}/>
          <Route path="/myorder" element={<MyOrdersListView />}/>
        </Routes>
      </BrowserRouter>
    </PastaSeateaContextComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
