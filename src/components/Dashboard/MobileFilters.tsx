import React from 'react';
import { X, Filter } from 'lucide-react';

interface MobileFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  filters: Record<string, string>;
  onFilterChange: (filters: Record<string, string>) => void;
  onClear: () => void;
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ 
  isOpen, 
  onClose, 
  filters, 
  onFilterChange, 
  onClear 
}) => {
  const handleInputChange = (field: string, value: string) => {
    onFilterChange({ ...filters, [field]: value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-red-600" />
            <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Age Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={filters.ageFrom}
                onChange={(e) => handleInputChange('ageFrom', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="From"
                min="18"
                max="60"
              />
              <input
                type="number"
                value={filters.ageTo}
                onChange={(e) => handleInputChange('ageTo', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="">Any Education</option>
              <option value="BE">BE/B.Tech</option>
              <option value="ME">ME/M.Tech</option>
              <option value="MBA">MBA</option>
              <option value="MSc">MSc</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <select
              value={filters.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="">Any Location</option>
              <option value="Chennai">Chennai</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Salem">Salem</option>
              <option value="Erode">Erode</option>
              <option value="Madurai">Madurai</option>
            </select>
          </div>

          {/* Income */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Income</label>
            <select
              value={filters.income}
              onChange={(e) => handleInputChange('income', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="">Any Income</option>
              <option value="3-5">3-5 LPA</option>
              <option value="4-6">4-6 LPA</option>
              <option value="6-8">6-8 LPA</option>
              <option value="8-10">8-10 LPA</option>
              <option value="10-15">10-15 LPA</option>
              <option value="15+">15+ LPA</option>
            </select>
          </div>

          {/* Dosham */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dosham Status</label>
            <select
              value={filters.dosham}
              onChange={(e) => handleInputChange('dosham', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="">Any</option>
              <option value="none">No Dosham</option>
              <option value="செவ்வாய்">செவ்வாய் தோஷம்</option>
              <option value="செவ்வாய், ராகு கேது">செவ்வாய், ராகு கேது தோஷம்</option>
            </select>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 flex space-x-3">
          <button
            onClick={onClear}
            className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilters;