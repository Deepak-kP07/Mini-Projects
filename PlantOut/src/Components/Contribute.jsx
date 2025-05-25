import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal"; 
import { useState } from "react";

export default function Contribute() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    setShowModal(true);
    setData(data);
    console.log(data);
  }
  
  return (
    <>
      <div className="max-w-4xl mx-auto mt-8 mb-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Contribute to Our <span className="text-green-600">PlantOut</span>
          </h1>
          <p className="text-gray-600 text-lg">Share your plant knowledge with our community</p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8">
            {/* Form Header */}
            <div className="mb-8 pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Add New Plant Details</h2>
              <p className="text-gray-600">Fill in the information about your plant to help others discover and care for it</p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              
              {/* Left Column - Basic Plant Info */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-6 border border-green-200/50">
                  <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Plant Information
                  </h3>
                  <div className="space-y-2">
                    <Input
                      label="Plant Name"
                      type="text"
                      name="common_name"
                      placeholder="Enter common plant name"
                      required
                    />
                    <Input
                      label="Scientific Name"
                      type="text"
                      name="scientific_name"
                      placeholder="Enter botanical name"
                    />
                    <Input 
                      label="Plant Type"
                      type="text"
                      name="plant_type"
                      placeholder="e.g., Herb, Shrub, Tree, Succulent"
                    />
                    <Input
                      label="Image URL"
                      type="url"
                      name="image_url"
                      placeholder="https://example.com/plant-image.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Care Instructions */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-6 border border-green-200/50">
                  <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Care Instructions
                  </h3>
                  <div className="space-y-2">
                    <div className="flex flex-col mb-4">
                      <label htmlFor="watering" className="px-1 uppercase text-sm font-semibold text-stone-600 mb-2">
                        Watering Frequency
                      </label>
                      <select 
                        id="watering" 
                        name="watering" 
                        className="p-2 border-4 border-b-green-300 rounded-md focus:outline-none bg-green-100"
                      >
                        <option value="">Select watering frequency</option>
                        <option value="Frequent">Frequent (Daily)</option>
                        <option value="Regular">Regular (2-3 times/week)</option> 
                        <option value="Moderate">Moderate (Weekly)</option>
                        <option value="Minimal">Minimal (Bi-weekly)</option>
                        <option value="Rare">Rare (Monthly)</option>   
                      </select>
                    </div>

                    <div className="flex flex-col mb-4">
                      <label htmlFor="sunlight" className="px-1 uppercase text-sm font-semibold text-stone-600 mb-2">
                        Sunlight Requirements
                      </label>
                      <select 
                        id="sunlight" 
                        name="sunlight" 
                        className="p-2 border-4 border-b-green-300 rounded-md focus:outline-none bg-green-100"
                      >
                        <option value="">Select sunlight requirement</option>
                        <option value="Full Sun">Full Sun (6+ hours)</option>
                        <option value="Partial Shade">Partial Shade (3-6 hours)</option> 
                        <option value="Low Light">Low Light (Less than 3 hours)</option>
                      </select>
                    </div>

                    <div className="flex flex-col mb-4">
                      <label htmlFor="maintenance" className="px-1 uppercase text-sm font-semibold text-stone-600 mb-2">
                        Maintenance Level
                      </label>
                      <select 
                        id="maintenance" 
                        name="maintenance" 
                        className="p-2 border-4 border-b-green-300 rounded-md focus:outline-none bg-green-100"
                      >
                        <option value="">Select maintenance level</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option> 
                        <option value="High">High</option>
                      </select>
                    </div>

                    <div className="flex flex-col mb-4">
                      <label htmlFor="care_level" className="px-1 uppercase text-sm font-semibold text-stone-600 mb-2">
                        Care Difficulty
                      </label>
                      <select 
                        id="care_level" 
                        name="care_level" 
                        className="p-2 border-4 border-b-green-300 rounded-md focus:outline-none bg-green-100"
                      >
                        <option value="">Select care difficulty</option>
                        <option value="Beginner">Easy (Beginner-friendly)</option>
                        <option value="Intermediate">Moderate (Some experience needed)</option> 
                        <option value="Advanced">Difficult (Advanced care required)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-gray-50 to-green-50/30 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Plant Description
                </h3>
                <div className="flex flex-col mb-4">
                  <label className="px-1 uppercase text-sm font-semibold text-stone-600 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    className="p-2 border-4 border-b-green-300 rounded-md focus:outline-none bg-green-100 resize-none"
                    placeholder="Provide a detailed description of the plant, its characteristics, growth habits, and any special care tips..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Special Properties Section */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Special Properties
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-amber-100 hover:border-amber-300 transition-colors cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="flowers" 
                      id="flowers" 
                      className="w-4 h-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Produces Flowers</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-amber-100 hover:border-amber-300 transition-colors cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="edible" 
                      id="edible" 
                      className="w-4 h-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Edible Plant</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-red-100 hover:border-red-300 transition-colors cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="poisonous_to_pets" 
                      id="poisonous_to_pets" 
                      className="w-4 h-4 text-red-600 border-red-300 rounded focus:ring-red-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Toxic to Pets</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Confirmation Section */}
            <div className="mb-8">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="Confirmation" 
                    id="Confirmation" 
                    required 
                    className="w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500 mt-0.5"
                  />
                  <span className="text-sm text-blue-800">
                    I'm happy to share these plant details with the public and confirm that the information provided is accurate to the best of my knowledge.
                  </span>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-end pt-6 border-t border-gray-100">
              <Button type="reset">
                Cancel
              </Button>
              <Button type="submit">
               Add Plant
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <Modal
          plant={data}
          onClose={() => {
            setShowModal(false);
            setData(null);
          }}
        />
      )}
    </>
  );
}