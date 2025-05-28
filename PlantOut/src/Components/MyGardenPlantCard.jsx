export default function GardenPlantCard({ plant, onRemove, handleCardClick }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-80 overflow-hidden border border-green-100">
      {/* Plant Image */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={
            plant?.default_image?.regular_url ||
            plant?.default_image?.medium_url ||
            plant?.default_image?.thumbnail ||
            'https://via.placeholder.com/320x192/f0f0f0/999?text=No+Image'
          }
          alt={plant?.common_name || 'Plant'}
        />
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-16"></div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col h-44">
        {/* Plant Names */}
        <div className="flex-1 space-y-2">
          <h2 className="text-xl font-bold text-gray-800 leading-tight line-clamp-2">
            {plant?.common_name || 'Unknown Plant'}
          </h2>
          <div className="flex items-start space-x-1">
            <span className="text-sm font-medium text-green-700 flex-shrink-0">Scientific:</span>
            <p className="text-sm text-gray-600 italic line-clamp-2 leading-relaxed">
              {Array.isArray(plant?.scientific_name) 
                ? plant.scientific_name[0] 
                : plant?.scientific_name || 'Not available'}
            </p>
          </div>
        </div>

          {/* Additional info available in garden view */}
            {plant?.family && (
              <div className="flex items-start space-x-1">
                <span className="text-sm font-medium text-gray-600 flex-shrink-0">Family:</span>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {plant.family}
                </p>
              </div>
            )}
            
            {plant?.genus && (
              <div className="flex items-start space-x-1">
                <span className="text-sm font-medium text-gray-600 flex-shrink-0">Genus:</span>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {plant.genus}
                </p>
              </div>
            )}
            
            {plant?.cultivar && (
              <div className="flex items-start space-x-1">
                <span className="text-sm font-medium text-gray-600 flex-shrink-0">Cultivar:</span>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {plant.cultivar}
                </p>
              </div>
            )}
          


        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 pt-3 border-t border-gray-100">
          <button
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center space-x-1"
            onClick={handleCardClick}
          > 
            <span>View Details</span>
          </button>
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center space-x-1"
            onClick={() => onRemove(plant.id)}
          >
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
}