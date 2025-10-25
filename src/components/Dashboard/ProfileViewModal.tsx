import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, User, MapPin, Briefcase, GraduationCap, Heart, Phone, Mail, Grid, List } from 'lucide-react';
import { Profile } from '../../types';

interface ProfileViewModalProps {
  profile: Profile;
  onClose: () => void;
}

const ProfileViewModal: React.FC<ProfileViewModalProps> = ({ profile, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showImageModal, setShowImageModal] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // 5 sample images for demonstration
  const sampleImages = [
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  const images = profile.photos && profile.photos.length >= 5 ? profile.photos.slice(0, 5) : sampleImages;

  const handleZoomIn = () => {
    setZoomLevel(prev => {
      const newLevel = Math.min(prev + 0.25, 3);
      return newLevel;
    });
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const newLevel = Math.max(prev - 0.25, 0.5);
      return newLevel;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    setTimeout(() => {
      setZoomLevel(1); // Reset zoom when changing images
    }, 50);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    setTimeout(() => {
      setZoomLevel(1); // Reset zoom when changing images
    }, 50);
  };

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setTimeout(() => {
      setZoomLevel(1); // Reset zoom when selecting new image
    }, 50);
  };

  const openImageModal = () => {
    setShowImageModal(true);
    setTimeout(() => {
      setZoomLevel(1);
    }, 100);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setTimeout(() => {
      setZoomLevel(1);
    }, 100);
  };

  return (
    <>
      {/* Main Profile Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="neo-card max-w-6xl w-full max-h-[95vh] overflow-hidden">
          {/* Improved Header */}
          <div className="gradient-primary text-white p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="relative z-10 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-shadow mb-1">{profile.name}</h2>
                  <div className="flex items-center space-x-4 text-white/80">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{profile.currentAddress || 'Chennai'}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{profile.job || 'Software Engineer'}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2 glass-card p-1 rounded-xl">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid' 
                        ? 'bg-white text-purple-600 shadow-lg' 
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list' 
                        ? 'bg-white text-purple-600 shadow-lg' 
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
                
                <button
                  onClick={onClose}
                  className="p-3 glass-button rounded-xl transition-all duration-200"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(95vh-120px)]">
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : 'space-y-8'}`}>
              {/* Image Gallery Section */}
              <div className={`space-y-4 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                {/* Main Image with Zoom */}
                <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-square relative overflow-hidden cursor-pointer group">
                    <img
                      src={images[currentImageIndex]}
                      alt={`${profile.name} - Photo ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onClick={openImageModal}
                      style={{ 
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: 'center center',
                        cursor: zoomLevel > 1 ? 'grab' : 'zoom-in'
                      }}
                    />
                    
                    {/* Overlay for zoom hint */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass-card rounded-full p-3">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Navigation */}
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 glass-card rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 glass-card rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-3 right-3 glass-card text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} of {images.length}
                  </div>
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center justify-center space-x-3 glass-card rounded-xl p-3">
                  <button
                    onClick={handleZoomOut}
                    className="p-2 glass-button rounded-full transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
                    disabled={zoomLevel <= 0.5}
                  >
                    <ZoomOut className="w-4 h-4 text-white" />
                  </button>
                  <span className="text-sm font-medium min-w-[70px] text-center glass-card px-3 py-1 rounded-full shadow-sm text-white">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    className="p-2 glass-button rounded-full transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
                    disabled={zoomLevel >= 3}
                  >
                    <ZoomIn className="w-4 h-4 text-white" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="p-2 glass-button rounded-full transition-all duration-200 shadow-sm hover:scale-110"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Thumbnail Strip - All 5 Images */}
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageClick(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-3 transition-all duration-200 hover:scale-105 ${
                        index === currentImageIndex
                          ? 'border-blue-400 ring-2 ring-blue-200 shadow-glow'
                          : 'border-white/30 hover:border-white/50 shadow-md'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Profile Details Section */}
              <div className={`space-y-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                {/* Basic Info Card */}
                <div className="neo-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center text-shadow">
                    <User className="w-5 h-5 mr-2" />
                    Basic Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">Age</span>
                      <span className="font-semibold text-white">{new Date().getFullYear() - new Date(profile.dateOfBirth || '1995-01-01').getFullYear()} years</span>
                    </div>
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">Height</span>
                      <span className="font-semibold text-white">{profile.height || "5'6\""}</span>
                    </div>
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">Weight</span>
                      <span className="font-semibold text-white">{profile.weight || '65 kg'}</span>
                    </div>
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">Color</span>
                      <span className="font-semibold text-white">{profile.color || 'Fair'}</span>
                    </div>
                  </div>
                </div>

                {/* Professional Info Card */}
                <div className="neo-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center text-shadow">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Professional Information
                  </h3>
                  <div className="space-y-3">
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">Education</span>
                      <span className="font-semibold text-white">{profile.education || 'BE Computer Science'}</span>
                    </div>
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">Occupation</span>
                      <span className="font-semibold text-white">{profile.job || 'Software Engineer'}</span>
                    </div>
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">Income</span>
                      <span className="font-semibold text-white">{profile.income || '8-10 LPA'}</span>
                    </div>
                  </div>
                </div>

                {/* Family Info Card */}
                <div className="neo-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center text-shadow">
                    <Heart className="w-5 h-5 mr-2" />
                    Family Information
                  </h3>
                  <div className="space-y-3">
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">Father</span>
                      <span className="font-semibold text-white">{profile.fatherName || 'Rajesh Gounder'}</span>
                    </div>
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">Mother</span>
                      <span className="font-semibold text-white">{profile.motherName || 'Lakshmi Gounder'}</span>
                    </div>
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">Native Place</span>
                      <span className="font-semibold text-white">{profile.native || 'Salem'}</span>
                    </div>
                  </div>
                </div>

                {/* Contact Info Card */}
                <div className="neo-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center text-shadow">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">Phone</span>
                      <span className="font-semibold text-white">{profile.phoneNumber1 || '+91 9876543210'}</span>
                    </div>
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">WhatsApp</span>
                      <span className="font-semibold text-white">{profile.whatsapp || '+91 9876543210'}</span>
                    </div>
                    <div className="glass-card rounded-lg p-3 shadow-sm">
                      <span className="text-white/60 block text-xs uppercase tracking-wide">Address</span>
                      <span className="font-semibold text-white">{profile.currentAddress || 'Chennai, Tamil Nadu'}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button className="flex-1 gradient-secondary text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-glow flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Express Interest</span>
                  </button>
                  <button className="flex-1 gradient-primary text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-glow flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal with Zoom */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-60">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-10 glass-card rounded-full p-3 transition-all duration-200 hover:scale-110"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div className="relative max-w-5xl max-h-full overflow-hidden">
              <img
                src={images[currentImageIndex]}
                alt={`${profile.name} - Photo ${currentImageIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain transition-transform duration-300 rounded-lg"
                style={{ 
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center'
                }}
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 glass-card rounded-full p-4 transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 glass-card rounded-full p-4 transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Zoom Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 glass-card rounded-xl px-6 py-3">
              <button
                onClick={handleZoomOut}
                className="text-white hover:text-gray-300 p-2 rounded-lg glass-button transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
                disabled={zoomLevel <= 0.5}
              >
                <ZoomOut className="w-6 h-6" />
              </button>
              <span className="text-white text-lg font-medium min-w-[80px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="text-white hover:text-gray-300 p-2 rounded-lg glass-button transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
                disabled={zoomLevel >= 3}
              >
                <ZoomIn className="w-6 h-6" />
              </button>
              <div className="w-px h-6 bg-white bg-opacity-30"></div>
              <button
                onClick={handleResetZoom}
                className="text-white hover:text-gray-300 p-2 rounded-lg glass-button transition-all duration-200 hover:scale-110"
                title="Reset Zoom"
              >
                <RotateCcw className="w-6 h-6" />
              </button>
            </div>

            {/* Image Info */}
            <div className="absolute top-6 left-6 glass-card text-white px-4 py-2 rounded-lg">
              <span className="text-lg font-medium">{currentImageIndex + 1} of {images.length}</span>
            </div>

            {/* Thumbnail Navigation */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex
                      ? 'border-blue-400 ring-2 ring-blue-400 ring-opacity-50 scale-110 shadow-glow'
                      : 'border-white/50 hover:border-white hover:scale-105'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileViewModal;