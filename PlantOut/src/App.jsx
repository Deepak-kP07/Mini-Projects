import { useState } from 'react';
import './App.css';
import ApiData from './Services/ApiData.jsx' ;
import NavBar from './Components/NavBar.jsx' ;
import Contribute from './Components/Contribute.jsx';
import MyGarden from './Components/MyGarden.jsx';
import About from './Components/About.jsx';
import Footer from './Components/Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  

  function addToGuarden(plant){

    const isalredyInGardan = myGarden.plants.some((gardenPlant) => gardenPlant.id === plant.id); 

    if (isalredyInGardan){
      // alert ('This plant is already in your garden!');
      toast.error(`${plant.common_name} is already in your garden!` , 
        {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
      );
      return;
    }
    

    setmyGarden((prevGarden) => ({
        ...prevGarden,
        plants: [...prevGarden.plants, plant ], // Replace 'New Plant' with actual plant data
        count: prevGarden.count + 1,
    }))
    toast.success(`${plant.common_name} has been added to your garden!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  function removeFromGarden(plantId) {
      setmyGarden( (prevGarden) => ({
        plants : prevGarden.plants.filter(plant => plant.id !== plantId),
        count: prevGarden.count - 1,
        }
      ))

      toast.info(`${plantToRemove?.common_name || 'Plant'} has been removed from your garden!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    }

  function handleNavClick(page){
    setCurrentPage(page);
  }

   function handleSearch(event) {
    setSearchQuary(event.target.value );
   }
  //  console.log(searchQuary);

  function renderCurrentPage(currentPage){
      switch(currentPage){
        case  'discover':
          return <ApiData searchTerm={searchQuary} onAddToGuarden={addToGuarden} />
        case 'contribute':
          return <Contribute />
        case 'mygarden':
          return <MyGarden plants={myGarden.plants} onRemove={removeFromGarden} />
        case 'about':
          return <About handleClick={handleNavClick} />
        default:  
          return <ApiData/>
      }
  }
  
   


  return (
    <>
    <NavBar count= {myGarden.count} handleClick={handleNavClick} onSearch={handleSearch}  />
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8"> 
      {renderCurrentPage(currentPage)}
    </div>
    <Footer />
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // or "dark" or "colored"
      />
    </>
  )
}

export default App
