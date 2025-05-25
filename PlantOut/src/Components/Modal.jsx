import { createPortal } from 'react-dom';

export default function Modal({ plant, onClose }) {
  return createPortal(
    <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-1/3 max-h-[80vh] overflow-y-auto relative shadow-2xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 shadow-md transition-all duration-200"
        >
          ✕
        </button>
        
        {/* Plant Image */}
        <div className="relative">
          <img
            className="w-full h-64 object-cover rounded-t-xl"
            src={
              plant?.default_image?.regular_url ||
              plant?.default_image?.medium_url ||
              plant?.default_image?.thumbnail ||
              plant?.image_url ||
              'https://via.placeholder.com/400x256/f0f0f0/999?text=No+Image'
            }
            alt={plant?.common_name || 'Plant'}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-20 rounded-t-xl"></div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Plant Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {plant?.common_name || 'Unknown Plant'}
            </h2>
            <p className="text-gray-600 italic">
              {plant?.scientific_name || 'Scientific name not available'}
            </p>
          </div>

        

          {/* Care Details Section */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-inner">
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Plant Care Guide</h3>
              <div className="w-20 h-1 bg-green-400 mx-auto rounded-full"></div>
            </div>

            {/* Care Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              
              {/* Type */}
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-green-200/50 hover:bg-white/80 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 font-bold">🌿</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-green-600 font-medium uppercase tracking-wider mb-1">Type</p>
                    <p className="text-green-800 font-semibold truncate">{plant?.type || 'Not specified'}</p>
                  </div>
                </div>
              </div>

              {/* Watering */}
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-green-200/50 hover:bg-white/80 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold">💧</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-green-600 font-medium uppercase tracking-wider mb-1">Watering</p>
                    <p className="text-green-800 font-semibold truncate">{plant?.watering || 'Not specified'}</p>
                  </div>
                </div>
              </div>

              {/* Sunlight */}
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-green-200/50 hover:bg-white/80 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-700 font-bold">☀️</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-green-600 font-medium uppercase tracking-wider mb-1">Sunlight</p>
                    <p className="text-green-800 font-semibold">
                      {Array.isArray(plant?.sunlight) ? plant.sunlight.join(', ') : plant?.sunlight || 'Not specified'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Maintenance */}
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-green-200/50 hover:bg-white/80 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-700 font-bold">🔧</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-green-600 font-medium uppercase tracking-wider mb-1">Maintenance</p>
                    <p className="text-green-800 font-semibold truncate">{plant?.maintenance || 'Not specified'}</p>
                  </div>
                </div>
              </div>

              {/* Care Level */}
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-green-200/50 hover:bg-white/80 transition-colors sm:col-span-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 font-bold">📊</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-green-600 font-medium uppercase tracking-wider mb-1">Care Level</p>
                    <p className="text-green-800 font-semibold">{plant?.care_level || 'Not specified'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Properties */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-green-700 mb-3">Special Properties</h4>
              
              {/* Flowers */}
              {plant?.flowers && (
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-700">🌸</span>
                  </div>
                  <p className="text-pink-800 font-medium">This plant produces beautiful flowers</p>
                </div>
              )}

              {/* Edible */}
              {plant?.edible && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-700">🍃</span>
                  </div>
                  <p className="text-orange-800 font-medium">This plant is edible</p>
                </div>
              )}

              {/* Pet Safety */}
              <div className={`rounded-lg p-3 flex items-center space-x-3 ${
                plant?.poisonous_to_pets 
                  ? 'bg-red-50 border border-red-200' 
                  : 'bg-green-50 border border-green-200'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  plant?.poisonous_to_pets 
                    ? 'bg-red-200' 
                    : 'bg-green-200'
                }`}>
                  <span className={`${
                    plant?.poisonous_to_pets 
                      ? 'text-red-700' 
                      : 'text-green-700'
                  }`}>
                    {plant?.poisonous_to_pets ? '⚠️' : '🐕'}
                  </span>
                </div>
                <p className={`font-medium ${
                  plant?.poisonous_to_pets 
                    ? 'text-red-800' 
                    : 'text-green-800'
                }`}>
                  {plant?.poisonous_to_pets 
                    ? 'Not safe for pets - keep away from animals' 
                    : 'Pet-friendly and safe for animals'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
          {/* Description */}
          {plant?.description && (
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">{plant.description}</p>
            </div>
          )}
      </div>
    </div>,
    document.getElementById('modal')
  );
}