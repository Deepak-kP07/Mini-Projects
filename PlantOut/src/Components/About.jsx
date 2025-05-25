import React from 'react';
import { Leaf, Search, Heart, Calendar, MapPin, Lightbulb } from 'lucide-react';


export default function About(  {handleClick})  {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-200 p-4 rounded-full">
              <Leaf className="h-12 w-12 text-green-700" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-green-800 mb-4">PlantOut</h1>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Your personal guide to discovering, managing, and nurturing plants that perfectly match your environment and lifestyle.
          </p>
        </div>

        {/* Project Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">About the Project</h2>
          <p className="text-gray-700 leading-relaxed">
            PlantOut  is a comprehensive, user-friendly application designed to help plant enthusiasts of all levels 
            discover, manage, and care for plants that suit their specific needs. Whether you're a beginner looking for 
            low-maintenance plants or an experienced gardener seeking new additions to your collection, PlantOut 
            provides the tools and knowledge you need to succeed.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Plant Discovery */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-200 p-2 rounded-lg mr-3">
                <Search className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">Plant Discovery & Search</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Browse plants with intelligent filtering (indoor/outdoor, sunlight needs)</li>
              <li>• Search by common or scientific names</li>
              <li>• Advanced filters for watering needs, maintenance level, and pet safety</li>
            </ul>
          </div>

          {/* Plant Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-200 p-2 rounded-lg mr-3">
                <Lightbulb className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">Detailed Plant Information</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Comprehensive plant profiles with complete care data</li>
              <li>• Visual care requirement indicators</li>
              <li>• Seasonal care guidance and flowering schedules</li>
            </ul>
          </div>

          {/* My Garden */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-200 p-2 rounded-lg mr-3">
                <Heart className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">My Garden Dashboard</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Create your personal plant collection</li>
              <li>• Custom plant tracker for your own plants</li>
              <li>• Monitor watering schedules and care activities</li>
            </ul>
          </div>

          {/* Care Assistant */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-200 p-2 rounded-lg mr-3">
                <Calendar className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">Plant Care Assistant</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>• Smart care reminders for your plant collection</li>
              <li>• Location-based seasonal care tips</li>
              <li>• Troubleshooting guide for common plant issues</li>
            </ul>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-to-r from-green-200 to-green-300 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-6 text-center">Why Choose PlantOut?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Location-Aware</h4>
              <p className="text-green-700 text-sm">Get personalized plant recommendations based on your local climate and conditions.</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Beginner Friendly</h4>
              <p className="text-green-700 text-sm">Perfect for newcomers with easy-to-understand care instructions and guidance.</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Comprehensive</h4>
              <p className="text-green-700 text-sm">From discovery to daily care, everything you need in one integrated platform.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-green-400 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Plant Journey?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Join thousands of plant lovers who've discovered their perfect green companions through PlantOut.
          </p>
          <button  onClick={() => handleClick("discover")}
          className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors duration-200 shadow-lg">
            Explore Plants Now
          </button>
        </div>
      </div>
    </div>
  );
};
