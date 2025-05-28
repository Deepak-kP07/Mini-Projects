import GardenPlantCard from "./MyGardenPlantCard";
import { useState } from "react";
import Modal from "./Modal";
export default function MyGarden({plants, onRemove}) {

  // Add these to your App.jsx state
const [showModal, setShowModal] = useState(false);
const [plantDetails, setPlantDetails] = useState(null);

// Add this function to App.jsx
const showPlantDetails = async (plant) => {
  try {
    const response = await fetch(
      `https://perenual.com/api/v2/species/details/${plant.id}?key=sk-eI0F6833e18799ccc10551`
    );
    if (!response.ok) {
      throw new Error(`HTTP bad request: ${response.status}`);
    }
    const data = await response.json();
    setPlantDetails(data);
    setShowModal(true);
  } catch (error) {
    console.error('Error fetching plant details:', error);
  }
};
  return (
   
    <>
      <div className="container !mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Garden</h2>
        {
          plants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
              {plants.map((plant) => (
                <div key={plant.id} className="!mx-auto">
                  <GardenPlantCard
                    plant={plant}
                    onRemove={onRemove }
                    handleCardClick={()=> showPlantDetails(plant) }
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center mt-10">
              No plants added to your garden yet. Start discovering and adding plants!
            </p>
          )
        }

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
      </div>
    </>
  );
}