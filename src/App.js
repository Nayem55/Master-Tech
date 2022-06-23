import './App.css';
import Header from './components/Header/Header';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>} > </Route>
      <Route path='/home' element={<Home/>} > </Route>
      <Route path='/reviews' element={<Reviews/>} > </Route>
      <Route path='/dashboard' element={<Dashboard/>} > </Route>
    
    </Routes>
        
       
    </div>
  );
}

export default App;
