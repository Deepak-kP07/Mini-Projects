const API_URL = "https://perenual.com/api/v2/species-list?";
const API_kEY = "sk-eI0F6833e18799ccc10551";
// const API_URL2 = "https://perenual.com/api/v2/species/details/[id]?";
import PlantCard from "../Components/PlantCard";
import Loading from "../Components/Loading";
import { useState, useEffect } from "react";
import Modal from "../Components/Modal";

export default function ApiData( {searchTerm , onAddToGuarden}) {
  const [plants, setPlants] = useState([]);
  const [plantDetails, setPlantDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const [searchedPlant , setSearchedPlant] = useState("");
const [showSearchResults, setShowSearchResults] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch(`${API_URL}key=${API_kEY}`);
        if (!response.ok) {
          throw new Error(`HTTP bad request: ${response.status}`);
        }
        const data = await response.json();
        setPlants(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);


  useEffect(() => {
    const fetchSeachedPlants = async () => {
        if (!searchTerm || searchTerm.trim() === '') {
      setShowSearchResults(false);
      setSearchedPlant(null);
      return;
    }
    setLoading(true);
      try {
         const response = await fetch(`${API_URL}key=${API_kEY}&q=${searchTerm}`);
        if (!response.ok) {
          throw new Error(`HTTP bad request: ${response.status}`);
        }
        const data = await response.json();
        setSearchedPlant(data);
        setShowSearchResults(true);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSeachedPlants();
  }, [searchTerm]);

  // here i have to write code for displaying the detailled Plant view
  const showPlantDetails = async (plant) => {
    try {
      const response = await fetch(
        `https://perenual.com/api/v2/species/details/${plant.id}?key=${API_kEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP bad request: ${response.status}`);
      }
      const data = await response.json();
      setPlantDetails(data); // Changed from data.data to data
      setShowModal(true);
    } catch (error) {
      setError(error.message);
    }
  };

  // searcInput feild 

  const plantsToDisplay = showSearchResults ? searchedPlant?.data || [] : plants;
  const isSearchActive = showSearchResults && searchTerm;

  return (
       <div>
      <div className="container mx-auto mt-10">
        {loading && <Loading />}
        {error && (
          <p className="text-center mt-[25%]">
            Error: {error}
          </p>
        )}
        
        {!loading && !error && (
          <>
            {/* Show search results header if searching */}
            {isSearchActive && (
              <h2 className="text-2xl font-bold mb-4">
                Search Results for "{searchTerm}"
              </h2>
            )}
            
            {/* Display plants grid */}
            {plantsToDisplay.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {plantsToDisplay.map((plant) => (
                  <div key={plant.id}>
                    <PlantCard
                      plant={plant}
                      onAdd={onAddToGuarden}
                      handleCardClick={() => {
                        showPlantDetails(plant);
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              // Show no results message if search is active but no results
              isSearchActive && (
                <p className="text-center mt-10">
                  No results found for "{searchTerm}"
                </p>
              )
            )}
          </>
        )}
      </div>

      {/* Modal for plant details */}
      {showModal && plantDetails && (
        <Modal
          plant={plantDetails}
          onClose={() => {
            setShowModal(false);
            setPlantDetails(null);
          }}
        />
      )}
    </div>  );
}
