import './App.css';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Laptop from './components/home/Laptop/Laptop.jsx';
import Features from './components/home/features/Features.jsx';
import Manager from './components/home/manager/Manager.jsx';
import Showcase from './components/home/showcase/Showcase.jsx';


function App() {
   return (
    <div className='wrapper'>
       <Header/>
        <main>
         <Showcase/>
         <Features/>
         <Laptop/>
         <Manager/>
        </main>
       <Footer/>
    </div>
  )
}

export default App
