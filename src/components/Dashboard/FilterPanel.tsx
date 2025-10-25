import React from 'react';
import { X, RotateCcw } from 'lucide-react';

interface FilterPanelProps {
  filters: Record<string, string>;
  onFilterChange: (filters: Record<string, string>) => void;
  onClear: () => void;
  isVisible: boolean;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange, onClear, isVisible }) => {
  const handleInputChange = (field: string, value: string) => {
    onFilterChange({ ...filters, [field]: value });
  };

  if (!isVisible) return null;

  return (
    <div className="border-t border-gray-200 pt-6 animate-slide-up">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Advanced Filters</h3>
        <button
          onClick={onClear}
          className="flex items-center space-x-2 text-red-600 hover:text-red-800 text-sm"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset All</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Age Range */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Age Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={filters.ageFrom}
              onChange={(e) => handleInputChange('ageFrom', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
              placeholder="From"
              min="18"
              max="60"
            />
            <input
              type="number"
              value={filters.ageTo}
              onChange={(e) => handleInputChange('ageTo', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
              placeholder="To"
              min="18"
              max="60"
            />
          </div>
        </div>

        {/* Education */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
          <select
            value={filters.education}
            onChange={(e) => handleInputChange('education', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
          >
            <option value="">Any Education</option>
            <option value="BE">BE/B.Tech</option>
            <option value="ME">ME/M.Tech</option>
            <option value="MBA">MBA</option>
            <option value="MSc">MSc</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="MBBS">MBBS</option>
            <option value="CA">CA</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Location</label>
          <select
            value={filters.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
          >
            <option value="">Any Location</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Salem">Salem</option>
            <option value="Erode">Erode</option>
            <option value="Madurai">Madurai</option>
            <option value="Tirupur">Tirupur</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>

        {/* Income */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income</label>
          <select
            value={filters.income}
            onChange={(e) => handleInputChange('income', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
          >
            <option value="">Any Income</option>
            <option value="2-4">2-4 LPA</option>
            <option value="4-6">4-6 LPA</option>
            <option value="6-8">6-8 LPA</option>
            <option value="8-10">8-10 LPA</option>
            <option value="10-15">10-15 LPA</option>
            <option value="15-20">15-20 LPA</option>
            <option value="20+">20+ LPA</option>
          </select>
        </div>

        {/* Height */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
          <select
            value={filters.height}
            onChange={(e) => handleInputChange('height', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
          >
            <option value="">Any Height</option>
            <option value="4'10">4'10" - 5'0"</option>
            <option value="5'1">5'1" - 5'3"</option>
            <option value="5'4">5'4" - 5'6"</option>
            <option value="5'7">5'7" - 5'9"</option>
            <option value="5'10">5'10" +</option>
          </select>
        </div>

        {/* Dosham */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Dosham Status</label>
          <select
            value={filters.dosham}
            onChange={(e) => handleInputChange('dosham', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
          >
            <option value="">Any</option>
            <option value="none">No Dosham</option>
            <option value="செவ்வாய்">செவ்வாய் தோஷம்</option>
            <option value="செவ்வாய், ராகு கேது">செவ்வாய், ராகு கேது தோஷம்</option>
          </select>
        </div>

        {/* Native Place */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Native Place</label>
          <input
            type="text"
            value={filters.native}
            onChange={(e) => handleInputChange('native', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
            placeholder="Enter native place"
          />
        </div>

        {/* Profession */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Profession</label>
          <input
            type="text"
            value={filters.job}
            onChange={(e) => handleInputChange('job', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
            placeholder="Enter profession"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;