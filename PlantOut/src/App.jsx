import { useState } from 'react';
import './App.css';
import ApiData from './Services/ApiData.jsx' ;
import NavBar from './Components/NavBar.jsx' ;
import Contribute from './Components/Contribute.jsx';
import MyGarden from './Components/MyGarden.jsx';
import About from './Components/About.jsx';
import Footer from './Components/Footer.jsx';


  //function handleClick(){
    // const selectedPlant = plants.find((plant) => plant.id === id);
    // if (selectedPlant) {
    //   setmyGarden((prevGarden) => ({
    //     ...prevGarden,
    //     plants: [...prevGarden.plants, selectedPlant],
    //     count: prevGarden.count + 1,
    //   }));
    // }
 // }



function App() {
  const [currentPage , setCurrentPage] = useState('discover');
  const [searchQuary ,  setSearchQuary] = useState('');
  const [myGarden, setmyGarden] = useState({
    plants: [],
    count: 0,
  });
  function handleClick(){
    setmyGarden((prevGarden) => ({
        ...prevGarden,
        count: prevGarden.count + 1,
    }))
  }
  function handleNavClick(page){
    setCurrentPage(page);
  }

   function handleSearch(event) {
    setSearchQuary(event.target.value );
   }
   console.log(searchQuary);

  function renderCurrentPage(currentPage){
      switch(currentPage){
        case  'discover':
          return <ApiData searchTerm={searchQuary} />
        case 'contribute':
          return <Contribute />
        case 'mygarden':
          return <MyGarden plants={myGarden.plants} />
        case 'about':
          return <About handleClick={handleNavClick} />
        default:  
          return <ApiData onSelect={handleClick}  />
      }
  }
  
   


  return (
    <>
    <NavBar count= {myGarden.count} handleClick={handleNavClick} onSearch={handleSearch}  />
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8"> 
      {renderCurrentPage(currentPage)}
    </div>
    <Footer />
    </>
  )
}

export default App
