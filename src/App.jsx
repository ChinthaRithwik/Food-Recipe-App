
import './App.css'
import {Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Pages/home/Home.jsx';
import Favourites from './Pages/favourites/Favourites.jsx';
import Details from './Pages/details/Details.jsx';
function App() {

  return <div> 
    <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
         <NavBar/>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/favourites' element={<Favourites />} />
           <Route path='/recipe-item/:id' element={<Details />} />
         </Routes>
    </div>
  </div>
 
}

export default App
