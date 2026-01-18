import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import SideMenu from './components/SideMenuComponent';
import Home from './components/HomeComponent';
import FilterComponent from './components/FilterComponent/FilterComponent';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="App d-flex mx-5">
     <SideMenu />
     <div className='vertical-divider'></div>
     <Home searchTerm={searchTerm}/>
     <div className='vertical-divider'></div>
     <FilterComponent 
     searchTerm={searchTerm}
     onSearchChange={setSearchTerm}/>
    </div>
  );
}

export default App;
