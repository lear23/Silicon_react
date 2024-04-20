import './App.css';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Features from './components/home/features/Features.jsx';
import Showcase from './components/home/showcase/Showcase.jsx';


function App() {
   return (
    <div className='wrapper'>
       <Header/>
        <main>
         <Showcase/>
         <Features/>
        </main>
       <Footer/>
    </div>
  )
}

export default App
